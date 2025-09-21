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

  def disabled_hours
    all_hours = (0..23).to_a

    available_hours = availabilities.flat_map do |slot|
      (slot.start_time.hour...slot.end_time.hour).to_a
    end

    all_hours - available_hours
  end
end
