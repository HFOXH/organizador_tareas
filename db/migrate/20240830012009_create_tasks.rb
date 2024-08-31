class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.string :status
      t.string :priority
      t.date :due_date
      t.datetime :completed_at
      t.references :user, null: false, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
