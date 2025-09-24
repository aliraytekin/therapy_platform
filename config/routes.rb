Rails.application.routes.draw do
  root to: "pages#home"
  devise_for :users
  devise_for :therapists

  resources :users, only: %i[show]

  resources :therapists, only: %i[index show] do
    resources :sessions, only: %i[create]
  end

  resources :sessions, only: %i[edit update destroy]
  resources :availabilities, only: %i[index show create update destroy]
end
