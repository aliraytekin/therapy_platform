Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/edit'
  get 'sessions/update'
  root to: "pages#home"
  devise_for :users
  devise_for :therapists

  resources :users, only: %i[show]
  resources :therapists, only: %i[index show] do
    resources :sessions, only: %i[new create edit update destroy]
  end
end
