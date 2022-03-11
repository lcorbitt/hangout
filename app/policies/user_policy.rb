class UserPolicy < ApplicationPolicy
  class Scope < Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end

  attr_reader :current_user, :model

  def initialize(current_user, model)
    @current_user = current_user
    @user = model
  end

  def index?
    @current_user.has_role? :admin
  end

  def edit?
    update?
  end

  def show?
    # @current_user.has_role? :admin || @current_user == @user
    @current_user == @user
  end

  def update?
    @user.has_role? :admin
  end
end
