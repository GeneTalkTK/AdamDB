class CreateVariants < ActiveRecord::Migration[6.1]
  def change
    create_table :variants do |t|
      t.references :sample, null: false, foreign_key: true
      t.integer :chrom
      t.integer :start
      t.integer :ende
      t.string :rsident
      t.string :ref
      t.string :allele
      t.string :func
      t.string :gene
      t.string :hgvs
      t.float  :cov_num
      t.float  :cov
      t.float  :cov_ab
      t.string :sample_data
      t.integer :pnv

      t.timestamps
    end
  end
end
