class Availability < ApplicationRecord
  belongs_to :therapist

  validates :start_time, :end_time, presence: true
end
