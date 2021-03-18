import React from 'react'

function ExternalLink({url, text}){
    return <span><i className="fa fa-external-link"></i> <a href={url} target="_blank" rel="noopener noreferrer" >{text}</a></span>
}

export default ExternalLink