class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.string :title
      t.string :team
      t.boolean :published
      t.text :description

      t.timestamps
    end
  end
end
