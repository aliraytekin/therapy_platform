require "faker"
require "pexels"

puts "Cleaning database..."
User.destroy_all
Therapist.destroy_all

client = Pexels::Client.new(ENV["PEXELS_API_KEY"])

SPECIALTIES = [
  "Anxiety", "Depression", "Burnout", "Stress Management", "Couples Therapy",
  "Family Therapy", "Work-Life Balance", "Trauma", "Grief Counseling",
  "Self-Esteem", "Addiction Recovery", "Mindfulness & Meditation",
  "Eating Disorders", "Anger Management", "Sleep Therapy"
]

LANGUAGES = [
  "English", "French", "Spanish", "German", "Italian", "Portuguese",
  "Russian", "Arabic", "Turkish", "Chinese", "Japanese"
]

BIOS = [
  "I use evidence-based practices to help clients build resilience and achieve emotional balance.",
  "My sessions focus on creating a safe space for open communication and personal growth.",
  "With over 8 years of experience, I support clients facing challenges in both personal and professional life.",
  "I specialize in integrating cognitive-behavioral therapy with mindfulness techniques.",
  "My goal is to empower individuals and couples to live more fulfilling and connected lives.",
  "I believe therapy is a journey of self-discovery, and I guide my clients with compassion and structure.",
  "Combining traditional therapy with modern approaches, I tailor each session to the client’s needs."
]

puts "Creating users..."
20.times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.unique.email,
    password: "password"
  )
end

puts "Creating therapists with images..."
75.times do
  therapist = Therapist.create!(
    name: Faker::Name.name,
    email: Faker::Internet.unique.email,
    password: "password",
    specialty: Array(SPECIALTIES.sample(3).join(", ")),
    bio: BIOS.sample + " " + BIOS.sample,
    languages: Array(LANGUAGES.sample(3).join(", ")),
    consultation_fee: rand(120..230),
    location: Faker::Address.full_address,
    timezone: Faker::Address.time_zone
  )

  photos = client.photos.search("portrait mental health professional therapist", per_page: 50)
  puts photos
  if photos.any?
    photo = photos.photos.sample
    file = URI.open(photo.src["large"])
    therapist.photo.attach(io: file, filename: "therapist_#{therapist.id}.jpg", content_type: "image/jpg")
  end
end

therapists = Therapist.all
users = User.all

puts "Creating availabilities..."
therapists.each do |therapist|
  rand(3..6).times do
    start_time = Faker::Time.forward(days: 10, period: :morning)
    therapist.availabilities.create!(
      start_time: start_time,
      end_time: start_time + rand(1..4).hour
    )
  end
end

puts "Creating sessions..."

20.times do
  therapist = therapists.sample
  user = users.sample
  availability = therapist.availabilities.where(booked: false).sample

  if availability
    Session.create!(
      user: user,
      therapist: therapist,
      start_time: availability.start_time,
      end_time: availability.end_time,
      duration: [30, 45, 60].sample
    )
    availability.update!(booked: true)
  end
end

puts "Seeding complete"
puts "#{User.count} users"
puts "#{Therapist.count} therapists"
puts "#{Session.count} sessions"
