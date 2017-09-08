class Dojo < ActiveRecord::Base
	validates :name, :city, :state, presence: true
	validates :state, length: { minimum: 2 }
end
