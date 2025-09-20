class CreateSessions < ActiveRecord::Migration[7.1]
  def change
    create_table :sessions do |t|
      t.references :therapist, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.float :consultation_fee
      t.integer :status, default: 0
      t.datetime :start_time
      t.datetime :end_date

      t.timestamps
    end
  end
end
