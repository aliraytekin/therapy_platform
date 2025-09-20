class PagesController < ApplicationController
  def home
    @therapists = Therapist.all.page(params[:page]).per(12)
  end
end
