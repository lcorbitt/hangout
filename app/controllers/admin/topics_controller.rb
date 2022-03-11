class Admin::TopicsController < ApplicationController
  before_action :authenticate_user!

  def index
    @topics = Topic.all.order(created_at: :desc)
    # authorize @users
  end

  def show
  end

  def edit
  end

  def create
  end

  def destroy
  end
end
