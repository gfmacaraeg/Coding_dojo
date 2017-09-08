class Player < ActiveRecord::Base
  belongs_to :team
end

#Player.all
#Team.all
#players.each do |player|
# puts player.team.stadium
#end

#players = Player.includes(:team).limit(10).order("RANDOM()")

#Player.includes(:team).where("teams.name = 'Los Angeles Lakers'").references(:team)

#Player.joins(:team).where("teams.name = 'Los Angeles Lakers'")

#Player.joins(:team).where("teams.name = 'Chicago Bulls'")

#players = Player.all
# players.each do |player|
#   team = player.team
#   puts "Player: #{player.name}, Team: #{team.name}, Mascot: #{team.mascot}, Stadium: #{team.stadium}"
# end

# players = Player.includes(:team)
# players.each do |player|
#   puts "Player: #{player.name}, Team: #{player.team.name}, Mascot: #{player.team.mascot}, Stadium: #{player.team.stadium}"
# end

#Player.joins(:team).select('players.*', 'teams.name as franchise', 'teams.stadium as stadium').where("teams.stadium = 'Staples Center'")

#Team.joins(:players).where("players.name LIKE 'Z%'")

#Team.joins(:players).where("players.name LIKE 'Z%'").select("teams.name as team_name", "teams.*", "players.*")
