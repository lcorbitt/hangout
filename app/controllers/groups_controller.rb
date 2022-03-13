class GroupsController < ApplicationController
  before_action :set_user

  def create
    @group = @user.groups.create(group_params)
    redirect_to group_path(@group)
  end

  def destroy
    @group = @user.groups.find(params[:id])
    @group.destroy
    redirect_to user_path(@user), status: 303
  end

  private

    def comment_params
      params.require(:comment).permit(:commenter, :body, :status)
    end

    def set_user
      @user = User.find(params[:user_id])
    end
end
