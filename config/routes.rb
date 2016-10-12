Rails.application.routes.draw do
  resources :groups
  resources :speeches
  # resources :users
  resources :sessions
  resources :highlights

  root "speeches#index"

  # need to refactor
  get "/load_selection_route", to: "highlights#load_selection"


  resources :users do
    collection do
      get 'autocomplete'
    end
  end



end
