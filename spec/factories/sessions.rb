FactoryBot.define do
  factory :session do
    start_time { 2.hours.from_now }
    end_time { 3.hours.from_now }
    status { :pending }
    association :therapist
    association :user
  end
end
