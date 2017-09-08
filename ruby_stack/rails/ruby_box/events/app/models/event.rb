class Event < ActiveRecord::Base
    belongs_to :location, required: true
    belongs_to :user, required: true

    has_many :meetups, dependent: :destroy
    has_many :users, through: :meetups, source: :user
    has_many :comments, dependent: :destroy

    validates :name, presence: true, length: 2..40
    validates :date, presence: true
    validates_date :date, on_or_after: :today
end
