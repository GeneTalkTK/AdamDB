import React from 'react'

export function RsId( {name} ) {
    let lowname = name.toLowerCase()
    if (lowname.startsWith('rs')) {
        var link = 'http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=' + lowname.replace('rs', '')
    } else if (lowname.startsWith('cosm')) { 
               var link = 'https://cancer.sanger.ac.uk/cosmic/mutation/overview?id=' + lowname.replace('cosm', '')
           } else {
               var link = 'http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=' + lowname
           }
    return <span><a href={link} target="_blank" rel="noopener noreferrer">{name}</a><br /></span>
}

export function RsIds( {ids} ) {
    if ( !Array.isArray( ids )) {
        ids = [ ids ]
    }
    return ids.map( (x) => {
        if (x.search(';') >= 0) { 
            x = x.split(';')
        } else {
            x = [x]
        }
        return x.map( (e) => <RsId key={e} name={e} /> )
    })
}
