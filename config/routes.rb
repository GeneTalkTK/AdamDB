Rails.application.routes.draw do
  get 'evadb/index'
  get 'evadb/forms'
  post 'evadb/search'
  root to: "main#index"
  # root to: "beacon#index"
  
  get 'main/index'

  get 'form', to: 'form#index' 
  get 'form/index'
  get 'form/search'

  get 'query', to: 'beacon#query'
  get 'info', to: 'beacon#info'

  post 'sandbox/img'
  
  get '/evadbquery', to: redirect('/')
  get '/variants', to: redirect('/')
  get '/sandbox', to: redirect('/')
  # match '*', to: 'main#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
