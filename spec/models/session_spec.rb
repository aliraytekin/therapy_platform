require 'rails_helper'

RSpec.describe Session, type: :model do
  describe "associations" do
    it { should belong_to(:therapist) }
    it { should belong_to(:user) }
  end

  describe "validations" do
    it { should validate_presence_of(:start_time) }
    it { should validate_presence_of(:end_time) }
  end

  it "is invalid if outside therapist availability" do
    therapist = create(:therapist)
    user = create(:user)
    availability = create(:availability, therapist: therapist, start_time: 1.hour.from_now, end_time: 3.hours.from_now)

    session = build(:session, therapist: therapist, user: user, start_time: 4.hours.from_now, end_time: 5.hours.from_now)

    expect(session).not_to be_valid
    expect(session.errors[:base]).to include("This session is outside therapist's availability")
  end

  it "is invalid if overlapping another session" do
    therapist = create(:therapist)
    user = create(:user)
    availability = create(:availability, therapist: therapist, start_time: 1.hour.from_now, end_time: 5.hours.from_now)

    create(:session, therapist: therapist, user: user, start_time: 2.hours.from_now, end_time: 3.hours.from_now)

    overlapping = build(:session, therapist: therapist, user: user, start_time: 2.5.hours.from_now, end_time: 3.5.hours.from_now)

    expect(overlapping).not_to be_valid
    expect(overlapping.errors[:base]).to include("This slot is already taken")
  end
end
