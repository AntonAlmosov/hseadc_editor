class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.string :title
      t.integer :year
      t.string :team
      t.string :role
      t.boolean :published

      t.timestamps
    end
  end
end
