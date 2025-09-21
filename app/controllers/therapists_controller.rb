class TherapistsController < ApplicationController
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
    @availabilities = @therapist.availabilities.order(:start_time)
    @disabled_slots = @therapist.disabled_hours
  end
end
