import React from 'react';
import Work1 from './works-image/Work1.png'
const Work  = (props) =>{
    return(
        <div className='w3-col l6 w3-padding'>
            <div className='w3-white'>
                <div className='w3-padding'>
                    <img src={props.image} style={{"width":100+"%"}} alt="" />
                </div>
                <div className='w3-padding'>
                    <div className='' style={{"fontSize":26+"px"}}>
                        <b>{props.title}</b>
                    </div>
                    <div style={{"fontSize":18+"px"}}>
                        {props.about}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work