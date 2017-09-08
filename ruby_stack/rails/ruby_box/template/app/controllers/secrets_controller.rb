class SecretsController < ApplicationController
	before_action :user_logged
  def index

  end

  def create
  end

  def show
  end

  def delete
  end
  private
  def user_logged
  	if !current_user
  		return redirect_to '/'
  	end
  end
end
