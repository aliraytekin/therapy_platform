require 'rails_helper'

RSpec.describe "Availabilities", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/availabilities/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/availabilities/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/availabilities/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/availabilities/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/availabilities/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
