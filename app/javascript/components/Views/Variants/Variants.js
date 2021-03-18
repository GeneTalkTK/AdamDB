import React from 'react';
import { connect } from 'react-redux';

import VariantTable from './VariantTable/VariantTable';
import Spinner from '../../UI/Spinner/Spinner';

const Variants = (props) => (
    <>
        <h1>Variant view</h1>
        { props.loading ? <Spinner /> : <VariantTable vcfData = {props.data} /> }
    </>
);

const mapStateToProps = state => {
    return {
        loading: state.evadbQuery.loading,
        data: state.evadbQuery.data
    }
}

export default connect( mapStateToProps )( Variants );