import React from "react";
import n from "./new.module.css"

const New =(props)=>{

    return(
        <div>
            <div>
                <p className={n.text}>New</p>
                <p>{ props.post }</p>
                { props.id }
            </div>
        </div>
    )
}
export default New;