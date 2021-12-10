class CreateDemoimgs < ActiveRecord::Migration[6.1]
  def change
    create_table :demoimgs do |t|
      t.string :name
      t.text :img

      t.timestamps
    end
  end
end
