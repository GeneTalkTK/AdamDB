class Variant < ApplicationRecord
  belongs_to :sample

  # EVADBDATA = [ 'chrpos', 'ident', 'genes', 'ref', 'num', 'cov', 'ab', 'dp', 'eff', 'hgvs', 'freq', 'samples', 'anno' ]
  EVADBDATA = [ 'chrpos', 'ident', 'genes', 'ref', 'num', 'cov', 'ab', 'dp', 'eff', 'hgvs', 'freq', 'samples', 'alt' ]
  EVADBDATA_CHRPOS  =  0
  EVADBDATA_IDENT   =  1
  EVADBDATA_GENES   =  2
  EVADBDATA_REF     =  3
  EVADBDATA_NUM     =  4
  EVADBDATA_COV     =  5
  EVADBDATA_AB      =  6
  EVADBDATA_DP      =  7
  EVADBDATA_EFF     =  8
  EVADBDATA_HGVS    =  9
  EVADBDATA_FREQ    = 10
  EVADBDATA_SAMPLES = 11
  EVADBDATA_ALT     = 12

  ###########################################################################
  # convert to JSON
  def to_compact
    d=[]
    d[ EVADBDATA_CHRPOS  ] = "#{chrom}:#{start}"
    d[ EVADBDATA_IDENT   ] = rsident
    d[ EVADBDATA_GENES   ] = gene
    d[ EVADBDATA_REF     ] = ref.upcase
    d[ EVADBDATA_NUM     ] = cov_num
    d[ EVADBDATA_COV     ] = cov
    d[ EVADBDATA_AB      ] = cov_ab
    d[ EVADBDATA_EFF     ] = func
    d[ EVADBDATA_HGVS    ] = hgvs
    d[ EVADBDATA_FREQ    ] = 0
    d[ EVADBDATA_SAMPLES ] = '' #sample_data
    d[ EVADBDATA_ALT     ] = allele.upcase
    return d
  end
end
