class Project
  @name
  @description
  def initialize (nme, desc)
  	@name = nme
  	@description = desc

  end	
  def elevator_pitch
  	print @name, ", ",@description

  end
  def name
  	puts @name
  end	
end
project1 = Project.new("Project 1", "Description 1")
puts project1.name # => "Project 1"
project1.elevator_pitch  # => "Project 1, Description 1"
