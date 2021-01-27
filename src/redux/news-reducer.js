
const UPDATE_NEWS_TEXT = 'UPDATE_NEWS_TEXT';
const ADD_NEWS = 'ADD_NEWS';


let initialState = {
    news: [
        {id:1, post:'Hello'},
        {id:2, post:'Hllo'},
        {id:3, post:'llo'}
    ],
    newNewsText:'hello'
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEWS:
            let newNews = {
                id:4,
                post: state.newNewsText
            }
            state.news.push(newNews);
            state.newNewsText = '';
            return state;
        case UPDATE_NEWS_TEXT:
            state.newNewsText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addNewsActionCreator = () => ({type:ADD_NEWS});
export const updateNewsTextActionCreator = (text) => ({
   type: UPDATE_NEWS_TEXT, newText: text});
export default newsReducer;