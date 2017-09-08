class SecretsController < ApplicationController
	before_action :user_logged
  def index
  	@likes = Like.all
  	@all_secrets = Secret.all
  end

  def create
  	@secret = Secret.new(content: params[:content], user_id: current_user.id)
  	if @secret.valid?
  		@secret.save
  		return redirect_to "/users/#{current_user.id}"
  	else
  		flash[:errors] = @secret.errors.full_messages
  		return redirect_to :back
  	end
  end

  def show
  end

    def delete
  	@secret = Secret.find_by_id(params[:secret_id].to_i)
  	if @secret
	  	if @secret.user_id == current_user.id
	  		@secret.destroy
	  		return redirect_to :back
	  	else
	  		flash[errors] = ["Cannot delete secret you did not post!"]
	  		return redirect_to "/users/#{current_user.id}"
	  	end
	else
		flash[:errors] =["That secret is not found"]
	end	
  	return redirect_to :back
  end	
  private
  # def secret_params
  # 	params.require(:secret).permit(:content).merge(user: current_user)
  # end
  def user_logged
  	if !current_user
  		return redirect_to '/'
  	end
  end
  def authenticate
            if params[:id] != current_user.id
		return redirect_to '/'
	end
    end
end
