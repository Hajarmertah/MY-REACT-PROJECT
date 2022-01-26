import React from 'react';
import bgimage from './bgimage'

const style= () => {
    return(
        <div id="style" className="style">
            <div className="overlay" style={{background: `url(${bgimage})`}}/>
        </div>
        
    )

}

export default style
