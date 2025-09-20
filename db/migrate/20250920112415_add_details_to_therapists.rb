class AddDetailsToTherapists < ActiveRecord::Migration[7.1]
  def change
    add_column :therapists, :name, :string
    add_column :therapists, :bio, :text
    add_column :therapists, :location, :string
    add_column :therapists, :languages, :string, array: true, default: []
  end
end
