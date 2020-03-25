class CreateBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :blocks do |t|
      t.integer :page_id
      t.integer :position
      t.string :block_type
      t.string :custom_class

      t.timestamps
    end
  end
end
