class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def show
    authorize @user
  end

  def edit
  end

  def update
    if current_user.update(update_params)
      redirect_to "/users/#{current_user.id}", notice: "User updated successfully."
    else
      flash[:errors] = current_user.errors.full_messages
      redirect_to "/users/#{current_user.id}/edit"
    end
  end

  private

  def update_params
    params.require(:user).permit(:avatar, :name, :email, :location)
  end

  def set_user
    @user = User.find(params[:id])
  end
end