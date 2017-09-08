class LikesController < ApplicationController
  def create
  	@liked = Like.create(user_id: current_user.id, secret_id: params[:secret_id])
  	return redirect_to :back
  end

  def delete
  end
end
