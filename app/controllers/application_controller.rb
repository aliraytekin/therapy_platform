class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    if resource_class == Therapist
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :bio, :location, :specialty, :languages, :timezone, :avatar, :consultation_fee])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name, :specialty, :bio, :location, :languages, :timezone, :avatar, :consultation_fee])
    elsif resource_class == User
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :avatar])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name, :avatar])
    end
  end
end
