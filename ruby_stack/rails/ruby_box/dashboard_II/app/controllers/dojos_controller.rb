class DojosController < ApplicationController
  before_action :set_dojo, only: [:show, :edit, :update, :destroy]

  # GET /dojos
  # GET /dojos.json
  def index
    @dojos = Dojo.all
  end

  # GET /dojos/1
  # GET /dojos/1.json
  def show
    @student = Student.where(dojo_id: params[:id])
  end

  # GET /dojos/new
  def new
    @dojo = Dojo.new
  end

  # GET /dojos/1/edit
  def edit
  end

  # POST /dojos
  # POST /dojos.json
  def create
    @dojo = Dojo.new(dojo_params)

    respond_to do |format|
      if @dojo.save
        format.html { redirect_to @dojo, notice: 'Dojo was successfully created.' }
        format.json { render :show, status: :created, location: @dojo }
      else
        format.html { render :new }
        format.json { render json: @dojo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /dojos/1
  # PATCH/PUT /dojos/1.json
  def update
    respond_to do |format|
      if @dojo.update(dojo_params)
        format.html { redirect_to @dojo, notice: 'Dojo was successfully updated.' }
        format.json { render :show, status: :ok, location: @dojo }
      else
        format.html { render :edit }
        format.json { render json: @dojo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /dojos/1
  # DELETE /dojos/1.json
  def destroy
    @dojo.destroy
    respond_to do |format|
      format.html { redirect_to dojos_url, notice: 'Dojo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dojo
      @dojo = Dojo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dojo_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end
end
