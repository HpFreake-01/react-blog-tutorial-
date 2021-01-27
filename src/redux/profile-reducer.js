const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';


let initialState = {
    posts:[
        {id:1, message:'Hi, how are you?', likeCount:11},
        {id:2, message:'This is my first post.', likeCount: 43},
        {id:3, message:'None', likeCount: 0},
    ],
    newPostText:'text'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:4,
                message: state.newPostText,
                likeCount:5
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_POST_TEXT, newText:text});


export default profileReducer;