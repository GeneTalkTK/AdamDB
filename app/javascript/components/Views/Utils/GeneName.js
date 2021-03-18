import React from 'react'

export function GeneName( {name} ) {
    return <span><a href={"https://classic.gene-talk.de/target_collections/" + name} target="_blank" rel="noopener noreferrer">{name}</a></span>
}

export function GeneNames( {genes} ){
    if ( Array.isArray( genes ) ) {
        return <> {genes.map( x => <><GeneName id={x} name={x} /><br /></> )} </>
    } else {
        return <GeneName name={genes} />
    }
}
