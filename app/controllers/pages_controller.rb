class PagesController < ApplicationController
  def home
    @therapists = Therapist.limit(3)
  end
end
