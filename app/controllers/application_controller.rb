class ApplicationController < ActionController::Base
  # before_action :authenticate_user!
  before_action :get_user

  private

  def get_user
    @user_id = current_user&.id
  end
end
