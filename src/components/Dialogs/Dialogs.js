import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialog-reducer";


const Dialogs = (props) => {

    let newMessage = React.createRef();


    let dialogsElements = props.dialogPage.dialogs.map( dialogs =>
        <DialogItem name={dialogs.name} id={dialogs.id}/>
        );

    let messagesElements = props.dialogPage.messages.map( messages =>
        <Message message={messages.message}/>
        );


    let onSendMessage = () =>{
        props.dispatch(addMessageCreator());
        //send data to creator of message
    }

    let onNewMessageChange = () =>{
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageCreator(text));
        //send a value from textarea to bbl
    }


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        ref={newMessage}
                        onChange={onNewMessageChange}
                        value={props.dialogPage.newMessageText}
                    /></div>
                    <div><button onClick={ onSendMessage }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;