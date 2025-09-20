class SessionsController < ApplicationController
  def create
    @therapist = Therapist.find(params[:therapist_id])
    @session = @therapist.sessions.build(sessions_params)
    @session.user = current_user
    @session.end_time = @session.start_time + @session.duration.minutes

    if @session.save
      redirect_to @therapist, notice: "The session was created successfully"
    else
      render "therapists/show", status: :unprocessable_content
    end
  end

  def edit
  end

  def update
    if @session.update(event_params)
      redirect_to @session, notice: "The session was successfully updated."
    else
      render @session, status: :unprocessable_content
    end
  end

  private

  def sessions_params
    params.require(:session).permit(:consultation_fee, :start_time, :end_time, :duration)
  end
end
