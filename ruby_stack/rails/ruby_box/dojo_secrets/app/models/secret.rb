class Secret < ActiveRecord::Base
  belongs_to :user
  has_many :likes
  has_many :users, through: :likes
  validates :content, presence: true, length: 2..30


end
