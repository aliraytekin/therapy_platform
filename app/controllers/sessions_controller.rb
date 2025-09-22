class SessionsController < ApplicationController
  before_action :set_session, only: %i[edit update destroy]

  def create
    @therapist = Therapist.find(params[:therapist_id])
    @session = @therapist.sessions.build(sessions_params)
    @session.user = current_user
    @session.end_time = @session.start_time + @session.duration.minutes

    set_therapist_data

    if @session.save
      redirect_to @therapist, notice: "The session was created successfully"
    else
      render "therapists/show", status: :unprocessable_content
    end
  end

  def edit
  end

  def update
    set_therapist_data

    if @session.update(sessions_params)
      redirect_to @session, notice: "The session was successfully updated."
    else
      render "therapists/show", status: :unprocessable_content
    end
  end

  def destroy
    @session.destroy
    redirect_to therapist_path(@session.therapist), notice: "Session was successfully deleted."
  end

  private

  def set_therapist_data
    @availabilities = @therapist.availabilities.order(:start_time).where(booked: false)
    @disabled_slots = @therapist.disabled_slots
  end

  def set_session
    @session = Session.find(params[:id])
  end

  def sessions_params
    params.require(:session).permit(:consultation_fee, :start_time, :duration)
  end
end
