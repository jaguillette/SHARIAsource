class AddSortOrderToReferenceTypes < ActiveRecord::Migration
  def change
    add_column :reference_types, :sort_order, :integer
    add_index :reference_types, :sort_order
  end
end
