import React from 'react'

//import PediaTable from './PediaTable'
//import PediaPlot  from './PediaPlot'
//import F2GSyndromeWidget from './F2GSyndromeWidget'
//import F2GFeatureWidget  from './F2GFeatureWidget'
import VariantTable from './VariantTable/VariantTable'

// import F2GView    from './F2GView'
// import VcfInfo    from './VcfInfo'
import {fetchJson} from '../../../backend/Backend'
import Loadable from '../../utils/Loadable'
import SimpleWidget from '../../utils/SimpleWidget'

import {
//  BigBreadcrumbs,
//  Stats,
  WidgetGrid
    //,
//  JarvisWidget
} from "../../../components/smartadmin";


class VcfView extends React.Component{

    constructor() {
        super()

        this.state = {
            vcfData: []
//            phenoData: []
//            pediaData: pediaStatic.pedia_data.map( (x,i) => { return { id:i+1, 
//                                                            ...x
//                                                          } 
//                                                 } ),
//            vcfInfo: pediaStatic.vcf_info
        }
    }

    componentDidMount() {
//        fetchJson( `/pedia/${window.vcf_id}.json` )
//          .then( data => {
//              this.setState({
//                  pediaData: data.map( (x,i) => { return { id:i+1, 
//                                                            ...x
//                                                          } 
//                                                } )
//              })
//        })
//        fetchJson( `/vcf/${window.vcf_id}.json` )
        fetchJson( `/vcf/vcf.json` )
          .then( data => {
              console.log( data )
              this.setState({
                  vcfData: data
              })
        })
    }

    render() {
        return <div id="content">
                <Loadable loading = {this.state.vcfData.length === 0} >
                    <VariantTable vcfData = {this.state.vcfData} />
                </Loadable>
               </div>
    }
}


export default VcfView
