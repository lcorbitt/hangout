class User < ApplicationRecord
  rolify
  after_create :assign_default_role

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :groups
  has_one_attached :avatar

  validates :email, presence: true
  validates :location, presence: true
  validates :name, presence: true

  def assign_default_role
    self.add_role(:member) if self.roles.blank?
  end
end
