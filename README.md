# 🧠 Therapy Platform

A full-stack web application inspired by **[moka.care](https://moka.care/)**, built to demonstrate my skills and determination after applying for their Junior Full-Stack Engineer position.

This platform connects users with therapists, allowing them to search, filter, and book therapy sessions online.

---

## ✨ Features

- **Authentication (Devise)**  
  Separate sign-up/login flows for Users and Therapists.  

- **Therapist profiles**  
  Photo, bio, specialties, location, and languages.  

- **Elasticsearch (Searchkick)**  
  Full-text search across therapist name, specialties, bio, location, and languages (`word_start`).  

- **Availabilities**  
  Therapists can define time slots when they are available.  

- **Booking system (Sessions)**  
  - Users can book therapy sessions within therapist availability.  
  - Validations ensure no overlap with existing sessions.  

- **RSpec Tests**  
  Model specs (validations, associations, custom validations) and request specs for sessions & search.  

- **Pagination**  
  Kaminari for browsing therapists.  

- **Responsive design**  
  Bootstrap 5 + SCSS with a lively, modern feel.  

- **Active Storage + Cloudinary**  
  For profile pictures and therapist photos.  

- **Deployment**  
  Hosted on Heroku.  

---

## 🛠️ Tech Stack

- **Backend:** Ruby on Rails 7, PostgreSQL, Elasticsearch (Searchkick)  
- **Frontend:** ERB, Bootstrap 5, SCSS, Tempus Dominus (date & time picker), JavaScript (animations planned)  
- **Auth:** Devise (Users + Therapists), Active Storage  
- **Testing:** RSpec, FactoryBot, Shoulda Matchers  
- **Deployment:** Heroku, Cloudinary  

---

## ⚡ Roadmap / Next Steps

- Add **frontend polish**: animations, transitions, improved UI components.  
- Add filters (specialty, language, availability) on search.  
- Implement notifications (session confirmation/cancellation).  
- Stripe integration for payments.  

---

## 🚀 Getting Started

### Prerequisites
- Ruby 3.3.5  
- Rails 7  
- PostgreSQL  
- Elasticsearch 8+  

### Installation

```bash
# Clone repo
git clone https://github.com/your-username/therapy_platform.git
cd therapy_platform

# Install dependencies
bundle install

# Setup DB
rails db:create db:migrate db:seed

# Run Elasticsearch (local or Docker)
elasticsearch

# Start server
bin/dev