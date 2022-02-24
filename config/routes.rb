Rails.application.routes.draw do
  devise_for :users
  get 'home/index'

  # uncomment for debugging
  # devise_for :users, :controllers => { :registrations => 'registrations' }
  root "home#index"
end
