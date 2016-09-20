Rails.application.routes.draw do
  resources :groups
  resources :speeches
  resources :users
  resources :sessions

  root "speeches#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
