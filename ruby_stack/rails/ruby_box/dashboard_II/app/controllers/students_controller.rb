class StudentsController < ApplicationController
  def index
  end

  def new
    @all_locations = Dojo.all.select("id", "branch")
  end

  def create
          @dojo = Student.create(student_params)
           redirect_to "/students/show/#{@dojo.id}"
      
    end

  def show
    @student = Student.find(params[:id])
    # @all_students = Student.find_by_sql("select * from students join dojos on students.dojo_id = dojos.id where students.id = #{params[:id]}")
    @all_students = Student.where(dojo_id: @student.dojo.id)
  end

  def edit
    @student = Student.find(params[:id])
    @all_locations = Dojo.all.select("id", "branch")
  end

  def update
    @student = Student.find(params[:id])
    @student.update(student_params)
    redirect_to "/students/show/#{@student.id}"
  end

  def destroy
  end
  private
    def student_params
      params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
    end
end
