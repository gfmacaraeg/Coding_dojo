class TimeController < ApplicationController
  def main
  	@curr_time = Time.now
  end
end
