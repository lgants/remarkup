class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :subscriber, default: false
      t.boolean :author, default: false
      t.boolean :figure, default: false
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
