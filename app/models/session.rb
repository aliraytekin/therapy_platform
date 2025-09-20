class Session < ApplicationRecord
  belongs_to :therapist
  belongs_to :patient

  enum status: { pending: 0, confirmed: 1, cancelled: 2 }

  validates :start_time, :end_time, presence: true
  validate :within_availability
  validate :no_overlap

  private

  def within_availability
    return if therapist.availabilities
                        .where("start_time <= ? AND end_time >= ?", start_time, end_time)
                        .exists?

    errors.add(:base, "This session is outside therapist's availability")
  end

  def no_overlap
    if therapist.sessions
      .where("start_time < ? AND end_time > ?", end_time, start_time)
      .exists?
      errors.add(:base, "This slot is already taken")
    end
  end
end
