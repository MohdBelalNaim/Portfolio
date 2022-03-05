import React from 'react';

const Skill = (props) =>{
    return(
    <div className='w3-half w3-padding'>
        <div id="skill-name">{props.name}</div>
        <div style={{"height":16+"px","backgroundColor":"black","borderRadius":10+"px","width":props.per+"%"}}></div>    
    </div>  
    )
}

export default Skill