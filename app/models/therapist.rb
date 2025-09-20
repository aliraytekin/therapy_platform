class Therapist < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :availabilities, dependent: :destroy
  has_many :sessions, dependent: :destroy

  validates :name, :specialty, :bio, :location, :languages, presence: true

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
end
