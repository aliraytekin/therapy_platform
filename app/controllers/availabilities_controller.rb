class AvailabilitiesController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :authenticate_therapist!, only: %i[index]

  def index
    @availabilities = current_therapist ? current_therapist.availabilities : Availability.none

    events = @availabilities.map do |a|
      {
        id: a.id,
        title: "Available",
        start: a.start_time.iso8601,
        end:   a.end_time.iso8601
      }
    end

    respond_to do |format|
      format.html
      format.json { render json: events }
    end
  end

  def show
    @availabilities = therapist.availabilities.find(params[:id])
  end

  def create
    @availability = current_therapist.availabilities.build(availability_params)

    if @availability.save
      render json: @availability, status: :created
    else
      render json: @availability.errors, status: :unprocessable_entity
    end
  end

  def update
    @availability = current_therapist.availabilities.find(params[:id])

    if @availability.update(availability_params)
      render json: @availability, status: :ok
    else
      render json: @availability.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @availability = current_therapist.availabilities.find(params[:id])
    @availability.destroy
    head :no_content
  end

  private

  def availability_params
    params.require(:availability).permit(:start_time, :end_time)
  end
end
