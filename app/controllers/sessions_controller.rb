class SessionsController < ApplicationController
  def create
    @session = Session.new(sessions_params)
    @therapist = Therapist.find(params[:therapist_id])
    @session.therapist = @therapist
    @session.user = current_user

    if @session.save
      redirect_to @session, notice: "The session was created successfully"
    else
      render @therapist, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @session.update(event_params)
      redirect_to @session, notice: "The session was successfully updated."
    else
      render @session, status: :unprocessable_entity
    end
  end

  private

  def sessions_params
    params.require(:session).permit(:consultation_fee, :start_time, :end_time, :duration)
  end
end
