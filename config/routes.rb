Rails.application.routes.draw do
  resources :groups
  resources :speeches
  # resources :users
  resources :sessions
  resources :highlights

  root "speeches#index"

  resources :users do
    collection do
      get 'autocomplete'
    end
  end



end
