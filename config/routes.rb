Rails.application.routes.draw do
  root "home#index"

  devise_for :users

  # uncomment for debugging
  # devise_for :users, :controllers => { :registrations => 'registrations' }

  get 'home/index'

  resources :users, only: [:show, :edit, :update]

  namespace :admin do
    resources :users
    resources :topics
  end
end
