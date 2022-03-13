Rails.application.routes.draw do
  root "home#index"

  devise_for :users

  # uncomment for debugging
  # devise_for :users, :controllers => { :registrations => 'registrations' }

  get 'home/index'

  namespace :admin do
    resources :users
    resources :topics
  end

  resources :organizing, only: [:index]

  resources :users, only: [:show, :edit, :update] do
    resources :groups
  end
end
