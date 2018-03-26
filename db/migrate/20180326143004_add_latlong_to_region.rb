class AddLatlongToRegion < ActiveRecord::Migration
  def change
    add_column :regions, :latitude, :decimal
    add_column :regions, :longitude, :decimal
  end
end
