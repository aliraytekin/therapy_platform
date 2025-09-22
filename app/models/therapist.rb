class Therapist < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :availabilities, dependent: :destroy
  has_many :sessions, dependent: :destroy
  has_one_attached :avatar
  has_one_attached :photo

  validates :name, :specialty, :bio, :location, :languages, :consultation_fee, presence: true

  searchkick word_start: %i[name specialty bio location languages]

  def search_data
    {
      name: name,
      specialty: specialty,
      bio: bio,
      location: location,
      languages: languages
    }
  end

  def disabled_slots
    slots = availabilities.order(:start_time)
    return [] if slots.empty?

    disabled = []
    current_start = slots.first.start_time.utc.beginning_of_day
    last_end      = slots.last.end_time.utc.end_of_day

    slots.each do |slot|
      start_time = slot.start_time.utc
      end_time   = slot.end_time.utc

      if start_time > current_start
        disabled << { from: current_start.iso8601, to: start_time.iso8601 }
      end
      current_start = end_time
    end

    if current_start < last_end
      disabled << { from: current_start.iso8601, to: last_end.iso8601 }
    end

    disabled
  end
end
