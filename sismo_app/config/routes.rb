Rails.application.routes.draw do

  namespace :api do
    resources :features, only: [:index, :show] do
      resources :comments, only: [:create]
    end
  end
end
