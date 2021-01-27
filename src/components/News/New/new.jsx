import React from "react";
import n from "./new.module.css"


const New =(props)=>{
    return(
        <div>
            <div>
                <p className={n.text}>new</p>
                <div>{props.post}</div>
            </div>
        </div>
    )
}
export default New;