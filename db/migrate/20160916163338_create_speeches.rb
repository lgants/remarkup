class CreateSpeeches < ActiveRecord::Migration[5.0]
  def change
    create_table :speeches do |t|
      t.string :title
      t.string :content
      t.string :speech_date
      t.string :venue
      t.string :city
      t.string :state
      t.string :first_name
      t.string :last_name
      t.integer :public_figure_id
      t.integer :creator_id
      t.boolean :pending, default: false
      t.boolean :approved, default: false
      t.integer :approver_id
      t.boolean :removed, default: false
      t.text :tags

      t.timestamps
    end
  end
end
