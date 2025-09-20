require "rails_helper"

RSpec.describe "Sessions", type: :request do
  let(:user) { create(:user) }
  let(:therapist) { create(:therapist) }
  let!(:availability) { create(:availability, therapist: therapist, start_time: 1.day.from_now, end_time: 2.days.from_now) }

  before { sign_in user }

  describe "POST /therapists/:therapist_id/sessions" do
    context "with valid params" do
      it "creates a new session" do
        availability = create(:availability, therapist: therapist, start_time: 1.day.from_now.change(hour: 9), end_time: 1.day.from_now.change(hour: 17))

        post therapist_sessions_path(therapist), params: {
          session: {
            start_time: availability.start_time.change(hour: 10),
            duration: 60
          }
        }

        expect(response).to redirect_to(therapist_path(therapist))
        follow_redirect!
        expect(response.body).to include("The session was created successfully")
        expect(Session.last.user).to eq(user)
      end
    end

    context "with invalid params (outside availability)" do
      it "does not create a session" do
        post therapist_sessions_path(therapist), params: {
          session: {
            start_time: 10.days.from_now,
            duration: 60
          }
        }

        expect(response).to have_http_status(:unprocessable_content)
        expect(Session.count).to eq(0)
      end
    end
  end

  describe "DELETE /sessions/:id" do
    let!(:availability) { create(:availability, therapist: therapist, start_time: 1.day.from_now.change(hour: 9), end_time: 1.day.from_now.change(hour: 17)) }
    let!(:session) { create(:session, therapist: therapist, user: user, start_time: 1.day.from_now.change(hour: 10), end_time: 1.day.from_now.change(hour: 11)) }

    it "destroys the session" do
      expect {
        delete session_path(session)
      }.to change(Session, :count).by(-1)
    end
  end
end
