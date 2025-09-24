class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home]

  def home
    @therapists = Therapist.limit(3)
  end
end
