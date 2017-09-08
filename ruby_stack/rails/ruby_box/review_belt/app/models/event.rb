class Event < ActiveRecord::Base
  belongs_to :user, required:true
  belongs_to :location, required:true

  has_many :users, dependent: :destroy
  has_many :users, through: :joined_events, source: :users 

  validates :name, presence: true, length: 2..30
  validates :date, presence: true
  validates :date, :on_or_after: :today

end
