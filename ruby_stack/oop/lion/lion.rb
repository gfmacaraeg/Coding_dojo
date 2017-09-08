require_relative 'mammal'
class Lion < Mammal
  def initialize
    @health = 170
    return self
  end
  def fly
    @health += 10
    return self
  end
  def attack_town
    @health -= 50
    return self
  end
  def eat_humans
    @health += 20
    return self
  end
  def display_health
    puts "This is a lion"
      super
  end
end
puts lion = Lion.new.attack_town.attack_town.attack_town
.eat_humans.eat_humans.fly.fly.display_health