import React from 'react';

import FilterMap from '../../filters/filterMap';
import MainLayout from '../Layout/MainLayout';
import * as filters from '../../filters/index';

const Filter = (props) => {

    const defaults = {}

    Object.keys(FilterMap).forEach( (key) => { defaults[key] = FilterMap[key].presets } )

    console.log(defaults)

    const widgets = Object.keys(FilterMap).map( (key) => FilterMap[key].form )

    return <MainLayout>
            <h1>Hi I'm the Filtersettings Page</h1>
            
            {widgets}
            
           </MainLayout>
};

export default Filter;