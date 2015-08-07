class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :name, null: false
      t.integer :card_id, null: false
      t.boolean :checked
      t.timestamps null: false
    end
  end
end
