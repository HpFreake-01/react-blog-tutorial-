const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


let initialState = {
    dialogs: [
        {id:1, name:'Dima'},
        {id:2, name:'Sasha'},
        {id:3, name:'Katy'},
        {id:4, name:'Diana'},
        {id:5, name:'Andrey'},
        {id:6, name:'Yana'},
    ],
    messages: [
        {id:1, message:'Yo'},
        {id:2, message:'YoYo'},
        {id:3, message:'How are you'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'},
        {id:6, message:'Yo'},
        {id:7, message:'Yoyyyyyy'}
    ],
    newMessageText: 'gfgfg'
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id:8,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: SEND_MESSAGE});//
export const updateNewMessageCreator = (text) => (
    {type:UPDATE_NEW_MESSAGE_BODY, newMessage: text }
);



export default dialogReducer;