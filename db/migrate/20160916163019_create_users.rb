class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone
      t.string :organization
      t.string :password_digest
      t.text :biography
      t.string :default_color
      t.boolean :public_figure, default: false
      t.boolean :entity, default: false
      t.boolean :moderator, default: false
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
