class Session < ApplicationRecord
  belongs_to :therapist
  belongs_to :user

  enum status: { pending: 0, confirmed: 1, cancelled: 2 }

  validates :start_time, :end_time, presence: true
  validate :within_availability
  validate :no_overlap

  after_create :change_availability

  private

  def change_availability
    availability = therapist.availabilities
                            .where("start_time <= ? AND end_time >= ?", start_time, end_time)
                            .first
    return unless availability

    Availability.transaction do
      availability.destroy!

      if availability.start_time < start_time
        therapist.availabilities.create!(
          start_time: availability.start_time,
          end_time: start_time
        )
      end

      if availability.end_time > end_time
        therapist.availabilities.create!(
          start_time: end_time,
          end_time: availability.end_time
        )
      end
    end
  end


  def within_availability
    return unless therapist

    return if therapist.availabilities
                        .where("start_time <= ? AND end_time >= ?", start_time, end_time)
                        .exists?

    errors.add(:base, "This timeframe is outside the therapist's availability")
  end

  def no_overlap
    return unless therapist && start_time && end_time

    if therapist.sessions
            .where("start_time < ? AND end_time > ?", end_time, start_time)
            .where.not(id: id)
            .exists?
      errors.add(:base, "This slot is already taken")
    end
  end
end
