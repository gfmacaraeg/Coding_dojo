class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.references :location, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
