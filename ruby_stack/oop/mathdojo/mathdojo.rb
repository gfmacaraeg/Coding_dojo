class MathDojo
	@number
  def initialize
  	@number = 0
  	self
  end
  # def add num
  # 	@number += num
  # 	self
  # end
  # def add (num1 = 0, num2 = 0, num3 = 0, num4 = 0)
  # 	@number = @number + num1 + num2 + num3 + num4
  # 	self
  # end

    def add *params
    @number += params.flatten.reduce(0, :+).round(2)
    return self
  end

    def subtract *params
    @number -= params.flatten.reduce(0, :+).round(2)
    return self
  end
  def result
  	puts @number
  	self
  end
end
challenge1 = MathDojo.new.add(2).add(2,5).subtract(3, 2).result
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result
# .add(2, 5)
# .subtract(3, 2).result
# challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15


