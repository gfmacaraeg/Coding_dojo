class UsersController < ApplicationController
  def index
  	@users = User.all

  end
  def new
  	render "new"
  end
  def create
  	User.create(name: params[:name])
  	redirect_to "/users"
  end
  def show
  	@show_user = User.find(params[:id])
  	render "show"
  end
  def edit
    @user = User.find(params[:id])
  end
  def total
    render json: { total: User.count }
  end
end
