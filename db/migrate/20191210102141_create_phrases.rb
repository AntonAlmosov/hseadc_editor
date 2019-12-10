class CreatePhrases < ActiveRecord::Migration[6.0]
  def change
    create_table :phrases do |t|
      t.integer :block_id
      t.integer :position
      t.string :phrase_type
      t.text :content
      t.string :custom_class

      t.timestamps
    end
  end
end
