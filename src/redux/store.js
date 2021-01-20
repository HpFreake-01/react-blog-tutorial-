import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import newsReducer from "./news-reducer";


let store = {
    _state:{
        profilePage:{
            posts:[
                {id:1, message:'Hi, how are you?', likeCount:11},
                {id:2, message:'This is my first post.', likeCount: 43},
                {id:3, message:'None', likeCount: 0},
            ],
            newPostText:'text'
        },
        dialogPage:{
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
        },
        newsPage:{
            news: [
                {id:1, post:'Hello'},
                {id:2, post:'dlfjasdlf'},
                {id:3, post:'dsjfls;adjlg;'},
                {id:4, post:'sdjlkfasjdlf'},
                {id:5, post:'fjla;sjfla'},
            ]
        }

    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


        this._state.profilePage =
            profileReducer(this._state.profilePage, action);
        this._state.dialogPage =
            dialogReducer(this._state.dialogPage, action);
        this._state.newsPage =
            newsReducer(this._state.newsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;