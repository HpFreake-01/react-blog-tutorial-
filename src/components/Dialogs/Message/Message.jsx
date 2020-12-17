import React from "react";
import post from "./../Dialogs.module.css"
import d from "../Dialogs.module.css";

const Message = (props) =>{
    return(
        <div className={d.message}>{props.message}</div>
    )
}

export default Message;