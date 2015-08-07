Rails.application.routes.draw do
  namespace :api do
    resources :boards, only: [:show, :index, :create] do
      resources :lists, only: [:show, :index, :create] do
        resources :cards, only: [:show, :index, :create] do
          resources :todo_items, only: [:show, :index, :create]
        end
      end
    end
  end
end
