class Location < ActiveRecord::Base
    validates :city, presence: true, length: 2..50
    validates :state, presence: true, length: { is: 2 }
    validates_format_of :city, :state, with: /\A[-a-z]+\Z/i

    def self.existsOrCreate(city, state)
        location = Location.find_by(city: city, state: state)

        if location
            return location
        end

        return  Location.create(city: city, state: state)
    end

    def self.full_location
        return "#{self.city.titleize}, #{self.state}"
    end
end
