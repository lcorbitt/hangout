class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user

  def show
    authorize @user
  end

  def edit
    authorize @user
  end

  def update
    authorize @user
    if @user.update(update_params)
      redirect_to "/users/#{@user.id}", notice: "Account updated successfully."
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to "/users/#{@user.id}/edit"
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
