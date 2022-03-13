class CreateGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.string :description
      t.string :location
      t.belongs_to :user, foreign_key: true
    end
  end
end
