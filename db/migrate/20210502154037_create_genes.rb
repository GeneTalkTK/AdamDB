class CreateGenes < ActiveRecord::Migration[6.1]
  def change
    create_table :genes do |t|
      t.string :hgnc_id
      t.string :symbol
      t.string :name
      t.string :locus_group
      t.string :locus_type
      t.string :status
      t.string :location
      t.string :location_sortable
      t.string :alias_symbol
      t.text   :alias_name
      t.string :prev_symbol
      t.text   :prev_name
      t.string :gene_family
      t.string :gene_family_id
      t.string :date_approved_reserved
      t.string :date_symbol_changed
      t.string :date_name_changed
      t.string :date_modified
      t.string :entrez_id
      t.string :ensembl_gene_id
      t.string :vega_id
      t.string :ucsc_id
      t.string :ena
      t.string :refseq_accession
      t.string :ccds_id
      t.string :uniprot_ids
      t.string :pubmed_id
      t.string :mgd_id
      t.string :rgd_id
      t.text   :lsdb
      t.string :cosmic
      t.string :omim_id
      t.string :mirbase
      t.string :homeodb
      t.string :snornabase
      t.string :bioparadigms_slc
      t.string :orphanet
      t.string :"pseudogene.org"
      t.string :horde_id
      t.string :merops
      t.string :imgt
      t.string :iuphar
      t.string :kznf_gene_catalog
      t.string :"mamit-trnadb"
      t.string :cd
      t.string :lncrnadb
      t.string :enzyme_id
      t.string :intermediate_filament_db
      t.string :rna_central_ids
      t.string :lncipedia
      t.string :gtrnadb
      t.string :agr

      t.timestamps
    end
  end
end
