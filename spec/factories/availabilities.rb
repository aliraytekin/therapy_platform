FactoryBot.define do
  factory :availability do
    start_time { 1.hour.from_now }
    end_time { 3.hours.from_now }
    association :therapist
  end
end
