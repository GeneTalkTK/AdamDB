# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_12_172600) do

  create_table "samples", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "variants", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "sample_id", null: false
    t.integer "chrom"
    t.integer "start"
    t.integer "ende"
    t.string "rsident"
    t.string "ref"
    t.string "allele"
    t.string "func"
    t.string "gene"
    t.string "hgvs"
    t.float "cov_num"
    t.float "cov"
    t.float "cov_ab"
    t.string "sample_data"
    t.integer "pnv"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sample_id"], name: "index_variants_on_sample_id"
  end

  add_foreign_key "variants", "samples"
end
