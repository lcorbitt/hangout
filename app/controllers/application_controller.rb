class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  include Pundit::Authorization

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  def pundit_user
    current_user
  end

  private

  def user_not_authorized
    flash[:alert] = "Sorry, you are not authorized to perform this action."
    redirect_to(request.referrer || root_path)
  end

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:avatar, :name, :email, :password, :location)}

      devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:avatar, :name, :email, :password, :current_password, :location)}
    end
end
