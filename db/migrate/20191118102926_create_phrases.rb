class CreatePhrases < ActiveRecord::Migration[6.0]
  def change
    create_table :phrases do |t|
      t.integer :order
      t.integer :page_id

      t.timestamps
    end
  end
end
