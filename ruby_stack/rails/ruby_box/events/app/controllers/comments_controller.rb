class CommentsController < ApplicationController
    def create
        @user = current_user
        @event = Event.find(params[:event_id])

        @comment = Comment.new(content: params[:content], user: @user, event: @event)

        if @comment.save
            flash[:notice] = ["Created Comment"]

            return redirect_to event_path(@event)
        end

        flash[:errors] = @comment.errors.full_messages

        return redirect_to :back
    end
end
