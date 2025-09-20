FactoryBot.define do
  factory :therapist do
    name { Faker::Name.name }
    email { Faker::Internet.unique.email }
    password { "password" }
    specialty { ["Anxiety"] }
    bio { "Experienced CBT therapist" }
    location { "Paris" }
    languages { "English, French" }
    consultation_fee { 80 }
  end
end
