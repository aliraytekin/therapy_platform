class TherapistsController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]

  def index
    if params[:query].present?
      @therapists = Therapist.search(
        params[:query],
        fields: %i[name specialty bio location languages],
        match: :word_start,
        page: params[:page],
        per_page: 12
      )
    else
      @therapists = Therapist.all.page(params[:page]).per(12)
    end
  end

  def show
    @therapist = Therapist.find(params[:id])
    @session = Session.new
    @availabilities = @therapist.availabilities.order(:start_time).where(booked: false)
    @enabled_slots = @therapist.enabled_slots
  end
end
