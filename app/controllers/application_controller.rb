class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    if resource_class == Therapist
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :bio, :location, :specialty, :languages, :timezone])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name, :specialty, :bio, :location, :languages, :timezone])
    elsif resource_class == User
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
      devise_parameter_sanitizer.permit(:account_update, keys: [:name])
    end
  end
end
