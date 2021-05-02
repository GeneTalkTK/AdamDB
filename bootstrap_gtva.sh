#!/bin/sh

# Additional gems:
# Devise

# Install devise:
# rails generate devise:install
# rails generate devise MODEL
# rails db:migrate

rails g scaffold Variant \
assembly:integer \
chrom:string \
pos:integer \
ref:string \
alt:string \
gene:reference \
sift:float \
polyphen:float \
cadd_raw:float \
cadd_phred:float \
--api

# Sample belongs_to VcfFile(s), User, Project(s), Supplement(s)
# VcfFile belongs_to Sample(s), [User], [Project(s)], has StorageLocation, 
# Project has User(s), Sample(s), Supplement(s)

# User
# Effect,Gene,Cadd,Frequencies,Clinvar-Referenzen,OMIM-Referenzen,Mutationtaster.



## CADD Annotationen:
# #Chrom            *
# Pos               *
# Ref               *
# Alt               *
# Type              *  SNV
# Length
# AnnoType          *  CodingTranscript 
# Consequence       *  NON_SYNONYMOUS
# ConsScore 
# ConsDetail        *  missense
# GC
# CpG
# motifECount
# motifEName
# motifEHIPos
# motifEScoreChng
# oAA
# nAA
# GeneID            * Ensemble
# FeatureID
# GeneName          * =GeneSymbol
# CCDS
# Intron
# Exon
# cDNApos
# relcDNApos
# CDSpos
# relCDSpos
# protPos
# relProtPos
# Domain
# Dst2Splice
# Dst2SplType
# minDistTSS
# minDistTSE
# SIFTcat
# SIFTval           *
# PolyPhenCat
# PolyPhenVal       *
# priPhCons
# mamPhCons
# verPhCons
# priPhyloP
# mamPhyloP
# verPhyloP
# bStatistic
# targetScan
# mirSVR-Score
# mirSVR-E
# mirSVR-Aln
# cHmm_E1
# cHmm_E2
# cHmm_E3
# cHmm_E4
# cHmm_E5
# cHmm_E6
# cHmm_E7
# cHmm_E8
# cHmm_E9
# cHmm_E10
# cHmm_E11
# cHmm_E12
# cHmm_E13
# cHmm_E14
# cHmm_E15
# cHmm_E16
# cHmm_E17
# cHmm_E18
# cHmm_E19
# cHmm_E20
# cHmm_E21
# cHmm_E22
# cHmm_E23
# cHmm_E24
# cHmm_E25
# GerpRS
# GerpRSpval
# GerpN
# GerpS
# tOverlapMotifs
# motifDist
# EncodeH3K4me1-sum
# EncodeH3K4me1-max
# EncodeH3K4me2-sum
# EncodeH3K4me2-max
# EncodeH3K4me3-sum
# EncodeH3K4me3-max
# EncodeH3K9ac-sum
# EncodeH3K9ac-max
# EncodeH3K9me3-sum
# EncodeH3K9me3-max
# EncodeH3K27ac-sum
# EncodeH3K27ac-max
# EncodeH3K27me3-sum
# EncodeH3K27me3-max
# EncodeH3K36me3-sum
# EncodeH3K36me3-max
# EncodeH3K79me2-sum
# EncodeH3K79me2-max
# EncodeH4K20me1-sum
# EncodeH4K20me1-max
# EncodeH2AFZ-sum
# EncodeH2AFZ-max
# EncodeDNase-sum
# EncodeDNase-max
# EncodetotalRNA-sum
# EncodetotalRNA-max
# Grantham
# SpliceAI-acc-gain
# SpliceAI-acc-loss
# SpliceAI-don-gain
# SpliceAI-don-loss
# MMSp_acceptorIntron
# MMSp_acceptor
# MMSp_exon
# MMSp_donor
# MMSp_donorIntron
# Dist2Mutation
# Freq100bp
# Rare100bp
# Sngl100bp
# Freq1000bp
# Rare1000bp
# Sngl1000bp
# Freq10000bp
# Rare10000bp
# Sngl10000bp
# EnsembleRegulatoryFeature
# dbscSNV-ada_score
# dbscSNV-rf_score
# RemapOverlapTF
# RemapOverlapCL
# RawScore             *      
# PHRED                *


## dbNSFP_Gene:
Gene_name
Ensembl_gene
chr
Gene_old_names
Gene_other_names
Uniprot_acc(HGNC/Uniprot)
Uniprot_id(HGNC/Uniprot)
Entrez_gene_id
CCDS_id
Refseq_id
ucsc_id
MIM_id
OMIM_id
Gene_full_name
Pathway(Uniprot)
Pathway(BioCarta)_short
Pathway(BioCarta)_full
Pathway(ConsensusPathDB)
Pathway(KEGG)_id
Pathway(KEGG)_full
Function_description
Disease_description
MIM_phenotype_id
MIM_disease
Orphanet_disorder_id
Orphanet_disorder
Orphanet_association_type
Trait_association(GWAS)
HPO_id
HPO_name
GO_biological_process
GO_cellular_component
GO_molecular_function
Tissue_specificity(Uniprot)
Expression(egenetics)
Expression(GNF/Atlas)
Interactions(IntAct)
Interactions(BioGRID)
Interactions(ConsensusPathDB)
P(HI)
HIPred_scoreHIPred
GHIS
P(rec)
Known_rec_info
RVIS_EVS
RVIS_percentile_EVS
LoF-FDR_ExAC
RVIS_ExAC
RVIS_percentile_ExAC
ExAC_pLI
ExAC_pRec
ExAC_pNull
ExAC_nonTCGA_pLI
ExAC_nonTCGA_pRec
ExAC_nonTCGA_pNull
ExAC_nonpsych_pLI
ExAC_nonpsych_pRec
ExAC_nonpsych_pNull
gnomAD_pLI
gnomAD_pRec
gnomAD_pNull
ExAC_del.score
ExAC_dup.score
ExAC_cnv.score
ExAC_cnv_flag
GDI
GDI-Phred
Gene damage prediction (all disease-causing genes)
Gene damage prediction (all Mendelian disease-causing genes)
Gene damage prediction (Mendelian AD disease-causing genes)
Gene damage prediction (Mendelian AR disease-causing genes)
Gene damage prediction (all PID disease-causing genes)
Gene damage prediction (PID AD disease-causing genes)
Gene damage prediction (PID AR diseas e-causing genes)
Gene damage prediction (all cancer disease-causing genes)
Gene damage prediction (cancer recessive disease-causing genes)
Gene damage prediction (cancer dominant disease-causing genes)
LoFtool_score
SORVA_LOF_MAF0.005_HetOrHom
SORVA_LOF_MAF0.005_Ho
mOrCompoundHet
SORVA_LOF_MAF0.001_HetOrHom
SORVA_LOF_MAF0.001_HomOrCompoundHet
SORVA_LOForMissense_MAF0.005_HetOrHom
SORVA_LOForMissense_MAF0.005_HomOrCompoundHet
SORVA_LOForMissense_MAF0.001_HetOrHom
SORVA_LOForMissense_MAF0.001_HomOrCompoundHet
Essential_gene
Essential_gene_CRISPR
Essential_gene_CRISPR2
Essential_gene_gene-trap
Gene_indispensability_score
Gene_indispensability_pred
MGI_mouse_gene
MGI_mouse_phenotype
ZFIN_zebrafish_gene
ZFIN_zebrafish_structure
ZFIN_zebrafish_phenotype_quality
ZFIN_zebrafish_phenotype_tag


# Install Gene tables for HGNC datafile

rails g scaffold Gene \
hgnc_id:string \
symbol:string \
name:string \
locus_group:string \
locus_type:string \
status:string \
location:string \
location_sortable:string \
alias_symbol:string \
alias_name:string \
prev_symbol:string \
prev_name:string \
gene_family:string \
gene_family_id:string \
date_approved_reserved:string \
date_symbol_changed:string \
date_name_changed:string \
date_modified:string \
entrez_id:string \
ensembl_gene_id:string \
vega_id:string \
ucsc_id:string \
ena:string \
refseq_accession:string \
ccds_id:string \
uniprot_ids:string \
pubmed_id:string \
mgd_id:string \
rgd_id:string \
lsdb:string \
cosmic:string \
omim_id:string \
mirbase:string \
homeodb:string \
snornabase:string \
bioparadigms_slc:string \
orphanet:string \
pseudogene.org:string \
horde_id:string \
merops:string \
imgt:string \
iuphar:string \
kznf_gene_catalog:string \
mamit-trnadb:string \
cd:string \
lncrnadb:string \
enzyme_id:string \
intermediate_filament_db:string \
rna_central_ids:string \
lncipedia:string \
gtrnadb:string \
agr:string \

 
