require 'sinatra'

get '/' do
  erb :index
end

get '/message' do
  'Hello world!'
end