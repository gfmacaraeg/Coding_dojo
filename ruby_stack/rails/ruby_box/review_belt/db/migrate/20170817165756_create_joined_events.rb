class CreateJoinedEvents < ActiveRecord::Migration
  def change
    create_table :joined_events do |t|
      t.references :user, index: true, foreign_key: true
      t.references :event, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
