import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialogs =>
        <DialogItem name={dialogs.name} id={dialogs.id}/>
        );

    let messagesElements = props.messages.map( messages =>
        <Message message={messages.message}/>
        );

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;