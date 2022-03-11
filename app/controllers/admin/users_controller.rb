class Admin::UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.all.order(created_at: :desc)
    authorize @users
  end

  # def show
  # end

  # def edit
  # end
end
