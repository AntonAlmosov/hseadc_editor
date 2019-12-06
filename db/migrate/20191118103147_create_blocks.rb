class CreateBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :blocks do |t|
      t.string :block_type
      t.string :width
      t.text :content
      t.string :order
      t.integer :phrase_id

      t.timestamps
    end
  end
end
