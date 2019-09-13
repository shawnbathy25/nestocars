class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
    	t.string :make
    	t.integer :year
    	t.string :model
    	t.text  :description
    	t.string :image
    	t.integer :price

      t.timestamps
    end
  end
end
