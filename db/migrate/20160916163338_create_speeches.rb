class CreateSpeeches < ActiveRecord::Migration[5.0]
  def change
    create_table :speeches do |t|
      t.string :title
      t.text :content
      t.datetime :speech_date
      t.string :venue
      t.string :city
      t.string :first_name
      t.string :last_name
      t.integer :public_figure_id
      t.integer :creator_id
      t.boolean :approved, default: false
      t.text :tags

      t.timestamps
    end
  end
end
