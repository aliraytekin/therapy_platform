require "rails_helper"

RSpec.describe Therapist, type: :model do
  describe "associations" do
    it { should have_many(:availabilities).dependent(:destroy) }
    it { should have_many(:sessions).dependent(:destroy) }
    it { should have_one_attached(:avatar) }
    it { should have_one_attached(:photo) }
  end

  describe "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:specialty) }
    it { should validate_presence_of(:bio) }
    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:languages) }
    it { should validate_presence_of(:consultation_fee) }
  end

  describe "#search_data" do
    it "returns the right hash" do

      specialty = ["Anxiety", "CBT"]
      languages = ["French", "English", "Russian"]

      therapist = build(:therapist,
                        name: "Alice",
                        specialty: Array(specialty),
                        bio: "Experienced CBT therapist",
                        location: "Paris",
                        languages: Array(languages))

      expect(therapist.search_data).to eq(
        {
          name: "Alice",
          specialty: ["Anxiety", "CBT"],
          bio: "Experienced CBT therapist",
          location: "Paris",
          languages: ["French", "English", "Russian"]
        }
      )
    end
  end
end
