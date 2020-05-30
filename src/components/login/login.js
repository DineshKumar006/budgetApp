import React from 'react'

const home=(props)=>{
    // console.log(props)
    return(
        <div>
<p>This is login page with id: {props.match.params.id}</p>
        </div>
    )
}

export default home