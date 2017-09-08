class EventsController < ApplicationController
    before_action :auth, only: [:edit, :update, :destroy]

    def index
        @in_state_events = Event.joins(:location).where('locations.state = ?', [current_user.location.state])

        @out_of_state_events = Event.where.not(id: @in_state_events)
    end

    def show
        @event = Event.find(params[:id])
    end

    def create
        @location = Location.existsOrCreate(params[:event][:city], params[:event][:state])

        @event = Event.new(event_params)

        if @event.save && @location.valid?
            flash[:notice] = ["New Event Created"]

            return redirect_to events_path
        end

        errors = @event.errors.full_messages + @location.errors.full_messages

        flash[:errors] = errors

        return redirect_to :back
    end

    def edit
        @event = Event.find(params[:id])
    end

    def update
        @location = Location.existsOrCreate(params[:location][:city], params[:location][:state])

        @event = Event.find(params[:id])

        if @location.valid?
            if @event.update(event_params)
                flash[:notice] = ["Updated Event"]

                return redirect_to event_path(@event)
            end
        end

        errors = @user.errors.full_messages + @location.errors.full_messages

        flash[:errors] = errors

        return redirect_to :back
    end

    def destroy
        @event = Event.find(params[:id])

        @event.delete

        return redirect_to events_path
    end

    private
        def event_params
            params.require(:event).permit(:name, :date).merge(user: current_user).merge(location: @location)
        end

        def auth
            event = Event.find(params[:id])

            return redirect_to events_path unless current_user == event.user
        end
end
