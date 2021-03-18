// https://stackoverflow.com/questions/29519868/bootstrap-progress-bar-with-gradient-color-showing-proportionally-on-active-widt

import React from 'react'

function HeatBar({value, text}) {
    text = text || value
    const outer_style = {
        'position': 'relative',
        'height': '100%',
        'width': '100%'
    }
    const text_style = {
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'width': '100%',
        'height': '100%',
        'zIndex': '10',
        'textAlign': 'center',
        'lineHeight': '15px',
        'color': 'white'
    }
    let left_radius = 0
    if ( value < 0.09 ) {
        left_radius = 20 - value * 200
    }
    const grey_bar_style = {
        'borderTopRightRadius': '20px',
        'borderBottomRightRadius': '20px',
        'borderTopLeftRadius': `${left_radius}px`,
        'borderBottomLeftRadius': `${left_radius}px`,
        'position': 'absolute',
        'top': '0',
        'right': '0',
        'height': '100%',
        'transition': 'all 0.8s',
        'background': 'gray',
        'width': `${(1-value)*100}%`
    }
    const color_0 = 'rgba(0, 128, 0, 1)'
    const color_1 = 'rgba(224, 0, 0, 1)'
    const whole_bar_style = {
              'borderRadius': '20px',
              'position': 'relative',
              'height': '15px',
              'background': 'rgb(255, 0, 0)',
              'background': `-moz-linear-gradient(left, {color_0} 0%, ${color_1} 100%)`,
              'background': `-webkit-gradient(linear, left top, right top, color-stop(0%, ${color_0}), color-stop(100%, ${color_1}))`,
              'background': `-webkit-linear-gradient(left, ${color_0} 0%, ${color_1} 100%)`,
              'background': `-o-linear-gradient(left, ${color_0} 0%, ${color_1} 100%)`,
              'background': `-ms-linear-gradient(left, ${color_0} 0%, ${color_1} 100%)`,
              'background': `linear-gradient(to right, ${color_0} 0%, ${color_1} 100%)`,
              'filter': "progid: DXImageTransform.Microsoft.gradient(startColorstr='#ff0000', endColorstr='#00ff00', GradientType=1)"
    }
    return <div style={outer_style}>
              <div style={text_style}>
                 {text}
              </div>
              <div style={whole_bar_style}>
                 <div style={grey_bar_style}></div>
              </div>
           </div>
}

export default HeatBar

