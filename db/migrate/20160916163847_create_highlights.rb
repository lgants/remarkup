class CreateHighlights < ActiveRecord::Migration[5.0]
  def change
    create_table :highlights do |t|
      t.integer :user_id
      t.integer :speech_id
      t.string :snippets
    end
  end
end
