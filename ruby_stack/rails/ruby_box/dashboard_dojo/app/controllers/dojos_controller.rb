class DojosController < ApplicationController
  def index
  	@all = Dojo.all
  end

  def show
  end
end
