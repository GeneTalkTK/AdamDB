import React, { useState } from 'react'
import PropTypes from 'prop-types'

import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search, ColumnToggle } from 'react-bootstrap-table2-toolkit'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

import HeatBar from '../../Utils/HeatBar'
import {GeneNames} from '../../Utils/GeneName'
import {RsIds} from '../../Utils/RsId'

import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'

function OpenVariantDialog( {callback} ) {return <Button variant="primary" className="btn btn-circle btn-primary" onClick={ () => callback() } >
   <i className="fa fa-gear" />
</Button>
}

function VariantDialog() {
  return (
      <Modal show={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

function VariantDialog2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function DDMenu({row,colinfo}) {
console.log( row )
        return  <> 
<Dropdown>
  <Dropdown.Toggle className="btn btn-circle btn-primary dropdown-toggle txt-color-white" variant="primary" id="dropdown-basic">
    <i className="fa fa-gear" />
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item>Action<br/></Dropdown.Item>
    <Dropdown.Item>Another action</Dropdown.Item>
    <Dropdown.Item>Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

</>

//    return <>
//<div class="dropdown">
//  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//    Dropdown button
//  </button>
//  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//    <a class="dropdown-item" href="#">Action</a>
//    <a class="dropdown-item" href="#">Another action</a>
//    <a class="dropdown-item" href="#">Something else here</a>
//  </div>
//</div>
//        </>
}

function TheModal( {hidden} ) { 
    if (hidden) {
        return null
    } else {
    return (
<div id="myModal" className="gt-modal">
  <div className="gt-modal-content">
    <span className="gtclose">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
</div>
)}}



class VariantTable extends React.PureComponent {
    constructor( props ) {
        super( props )
    }

    state = {
     the_modal_hidden: true
    }
//     the_modal_hidden= true

    showModal = (e) => {
        console.log("Button pressed")
        this.setState({
            the_modal_hidden: false
        })
//            this.the_modal_hidden = false
    }

    hideModal = () => {
        console.log("Button pressed")
        this.setState({
            the_modal_hidden: true
        })
//            this.the_modal_hidden = false
    }
    
    scoreFormatter( cell, row ){
        const x = parseFloat(cell).toFixed(2)
        return x === '0.00' ? '' : x
    }

    scorePediaBarFormatter( cell, row ){
        const val  = parseFloat(cell)
        const text = val.toFixed(2)
        const x    = ((val+5)/12).toFixed(2)
        return <HeatBar value={x} text={text}/>
    }

    scoreBarFormatter( cell, row ){
        const x = parseFloat(cell).toFixed(2)
        return x === '0.00' ? '' : <HeatBar value={x} />
    }

    labelFormatter( cell, row ){
        return ( cell == 0) ? 'Neutral' : 'Pathogenic'
    }

//    chrposFormatter( cell, row ){
//        console.log( row )
//        return( row[0] )
//    }
//    , formatter: this.chrposFormatter

    rsidFormatter(cell) {
        return <RsIds ids={cell} />
    }

    geneFormatter(cell) {
        return <GeneNames genes={cell} />
    }

    refFormatter(cell) {
        return <span title={cell}>{( cell.length > 5) ? cell.substr(0,5)+'...' : cell}</span>
    }

    covFormatter(cell) {
        return <span title="Coverage">{cell}</span>
    }

    abFormatter(cell, row, rowIndex, formatExtraData) {
        const num = row['num'] || '-'
        const cov = row['cov'] || '-'
        const ab  = cell ? cell : '-'
        const abshort = cell ? cell.toPrecision(4) : '-'
        return <span title={`Allelic Balance: ${num} / ${cov} = ${ab}`}>{abshort}</span>
    }

    effectFormatter(cell, row, rowIndex, formatExtraData) {
        return <span title={row[ 'hgvs' ]}>{cell}</span>
    }

//   <% end -%>
//  <td title="<%= gt -%><%= "\nPopulation Frequency: #{l[ VcfFile::SHOW_FREQ ][i]}".html_safe -%><%= "#{l[ VcfFile::SHOW_FLAGS ][i]}".html_safe -%> "><%= truncate( gt, :length => 10 ) %></td>
//  <td title="Coverage"><%= cov -%></td>
//  <td title="Allelic balance: <%= num -%>/<%= cov -%> = <%= ab -%>"><%= abshort -%></td>

    render() {
        const colinfo = this.props.vcfData.columns
        console.log (colinfo )

        const variantData = this.props.vcfData.variants.map( (v) => {
          return { key: v[0], ...colinfo.reduce( (map,key,index) => { map[key] = v[index]; return map}, {}) };
        })

        const columns = [
            { dataField: 'chrpos' , text: 'Chr:Pos'             , sort: true },
            { dataField: 'ident'  , text: 'RsID'                , sort: true, formatter: this.rsidFormatter },
            { dataField: 'genes'  , text: 'Genes'               , sort: true, formatter: this.geneFormatter },
            { dataField: 'ref'    , text: 'Ref'                 , sort: true, formatter: this.refFormatter  },
            { dataField: 'cov'    , text: 'Cov.'                , sort: true, formatter: this.covFormatter  },
            { dataField: 'ab'     , text: 'All.Bal.'            , sort: true, formatter: this.abFormatter   },  
//            {
//              dataField: 'df1',
//              isDummyField: true,
//              text: 'Action 1',
////                formatter: (cellContent, row, formatExtraData ) => <DDMenu row={row} colinfo={formatExtraData} />,
////                formatter: (cellContent, row, formatExtraData ) => <OpenVariantDialog callback = {() => this.openModal} />,
//                formatter: (cellContent, row, formatExtraData ) =>  <Button variant="primary" className="btn btn-circle btn-primary" onClick={ this.showModal } >
//   <i className="fa fa-gear" />
//</Button>,
//                formatExtraData: colinfo
//            },            
            { dataField: colinfo.indexOf('dp'         ), text: 'DP'                  , classes: 'tw-100', sort: true },
            { dataField: 'eff'   , text: 'Effect/HGVS'         , sort: true, formatter: this.effectFormatter  },
//                            { dataField: colinfo.indexOf('hgvs'       ), text: 'HGVS'                , classes: 'tw-100', sort: true },
//                            { dataField: colinfo.indexOf('freq'       ), text: 'Freq'                , classes: 'tw-100', sort: true },
            { dataField: 'samples'   , text: 'Samples'             , classes: 'tw-100', sort: true },
//                            { dataField: colinfo.indexOf('anno'       ), text: 'Annotations'         , classes: 'tw-100', sort: true }
                        ]

        // const tableData = pediaData.map( (row) => { gene_name = <GeneName name={row.gene_name} />, ...row } )
        //const tableItems = pediaData.map( (item) => <PediaTableRow data={item} />)
        const { SearchBar } = Search;
        const { ToggleList } = ColumnToggle;
        const divStyle = {
                           height:'700px',
                           overflow: 'auto'
                         }

      return  <>
                <ToolkitProvider
                       keyField='chrpos'
                       data={ variantData }
                       columns={ columns }
                       search
                       columnToggle
                >
                       {
                         props => (
                           <div>
                             <div style={divStyle}>
                             <BootstrapTable
                                             keyField={colinfo.indexOf('chrpos')}
                                             data={ this.props.vcfData.variants } 
                                             columns={ columns } 
                                             striped
                                             hover
                                             condensed
                                             bootstrap4 = {true}
                                             height = {2000}
                                             scrollTop={ 'Bottom' }
                                             { ...props.baseProps }
                             />
                             </div>
                             <hr />
                             <SearchBar 
                                        placeholder="Search in PEDIA results"
                                        { ...props.searchProps } />
                             <hr />
                             <p>Show/Hide column:</p>
                             <ToggleList 
                                btnClassName="btn-table-colselector .btn-xs"
                                { ...props.columnToggleProps } />
                           </div>
                         )
                       }
                </ToolkitProvider>
        </>
    }
    
    
/// V
    renderx() {
        const colinfo = this.props.vcfData.columns
        const columns = [
            { dataField: colinfo.indexOf('chrpos'     ), text: 'Chr:Pos'             , sort: true },
            { dataField: colinfo.indexOf('ident'      ), text: 'Ident'               , sort: true, formatter: this.rsidFormatter },
            { dataField: colinfo.indexOf('genes'      ), text: 'Genes'               , sort: true, formatter: this.geneFormatter },
            { dataField: colinfo.indexOf('ref'        ), text: 'Ref'                 , sort: true, formatter: this.refFormatter },
            { dataField: colinfo.indexOf('cov'        ), text: 'Cov'                 , sort: true, formatter: this.covFormatter  },
            { dataField: colinfo.indexOf('ab'         ), text: 'AB'                  , sort: true, formatter: this.abFormatter,  
                        formatExtraData: { numidx: colinfo.indexOf('num'), covidx: colinfo.indexOf('cov') } },
//            {
//              dataField: 'df1',
//              isDummyField: true,
//              text: 'Action 1',
////                formatter: (cellContent, row, formatExtraData ) => <DDMenu row={row} colinfo={formatExtraData} />,
////                formatter: (cellContent, row, formatExtraData ) => <OpenVariantDialog callback = {() => this.openModal} />,
//                formatter: (cellContent, row, formatExtraData ) =>  <Button variant="primary" className="btn btn-circle btn-primary" onClick={ this.showModal } >
//   <i className="fa fa-gear" />
//</Button>,
//                formatExtraData: colinfo
//            },            
            { dataField: colinfo.indexOf('dp'         ), text: 'DP'                  , classes: 'tw-100', sort: true },
            { dataField: colinfo.indexOf('eff'        ), text: 'Effect/HGVS'         , sort: true, formatter: this.effectFormatter, 
                                        formatExtraData: { hgvsidx: colinfo.indexOf('hgvs') } },
//                            { dataField: colinfo.indexOf('hgvs'       ), text: 'HGVS'                , classes: 'tw-100', sort: true },
//                            { dataField: colinfo.indexOf('freq'       ), text: 'Freq'                , classes: 'tw-100', sort: true },
//                            { dataField: colinfo.indexOf('samples'    ), text: 'Samples'             , classes: 'tw-100', sort: true },
//                            { dataField: colinfo.indexOf('anno'       ), text: 'Annotations'         , classes: 'tw-100', sort: true }
                        ]

        // const tableData = pediaData.map( (row) => { gene_name = <GeneName name={row.gene_name} />, ...row } )
        //const tableItems = pediaData.map( (item) => <PediaTableRow data={item} />)
        const { SearchBar } = Search;
        const { ToggleList } = ColumnToggle;
        const divStyle = {
                           height:'700px',
                           overflow: 'auto'
                         }

// <Button variant="primary" className="btn btn-circle btn-primary" onClick={ this.showModal } >
//   <i className="fa fa-gear" />
// </Button>

//                <TheModal hidden = {this.state.the_modal_hidden} />

        return  <>
 <Button variant="primary" className="btn btn-circle btn-primary" onClick={ this.showModal } >
   <i className="fa fa-gear" />
 </Button>                         
        </>
    }

/// ^ 
}
// 
// <Modal show={this.state.the_modal_hidden} onHide={this.hideModal}>
// <Modal.Header closeButton>
//   <Modal.Title>Modal heading</Modal.Title>
// </Modal.Header>
// <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// <Modal.Footer>
//   <Button variant="secondary" onClick={this.hideModal}>
//     Close
//   </Button>
//   <Button variant="primary" onClick={this.hideModal}>
//     Save Changes
//   </Button>
// </Modal.Footer>
// </Modal>
// 
//VariantTable.propTypes = {
//    pediaData: PropTypes.arrayOf( PropTypes.shape({
//                                                    id           : PropTypes.number.isRequired,
//                                                    gene_name    : PropTypes.string.isRequired,
//                                                    gene_id      : PropTypes.string.isRequired,
//                                                    pedia_score  : PropTypes.string.isRequired,
//                                                    feature_score: PropTypes.string.isRequired,
//                                                    cadd_score   : PropTypes.string.isRequired,
//                                                    gestalt_score: PropTypes.string.isRequired,
//                                                    boqa_score   : PropTypes.string.isRequired,
//                                                    pheno_score  : PropTypes.string.isRequired,
//                                                    label        : PropTypes.string.isRequired
//                                                 })
//                                ).isRequired
//}
export default VariantTable




// 
// --- !ruby/object:VcfLine 
// cov_ab: []
// 
// data: 
//   :filter: PASS
//   :samples: 
//   - :ad: 
//     - 94
//     - 482
//     :nl: 20
//     :sb: 
//     - -100
//     - "0000"
//     :vf: 
//     - 0
//     - 8368
//     :_: 
//       :aa: C
//       :idx: 
//       - 0
//       - 1
//       :al: 
//       - CT
//       - C
//     :gqx: 100
//     :gt: 0/1
//     :gq: 100
//   :pos: 89623860
//   :alt: 
//   - CT
//   - C
//   :qual: 
//   - 100
//   - "00"
//   :format: 
//   - GT
//   - GQ
//   - AD
//   - VF
//   - NL
//   - SB
//   - GQX
//   :info: 
//     :exon: 
//     :dp: "576"
//     :ti: NM_000314
//     :gi: PTEN
//     :effect: UTR5
//     :fc: Noncoding
//     :hgvs: PTEN(NM_000314:c.-366del-)
//   :ref: CT
//   :id: rs71022512
//   :chrom: 10
// infohash: 
// => nil
