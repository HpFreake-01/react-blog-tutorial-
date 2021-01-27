import React from "react";
import New from "./New/new";
import n from "../News/New/new.module.css"
import {addNewsActionCreator, updateNewsTextActionCreator} from "../../redux/news-reducer";

const STATE = require('../../redux/store');
const News =(props)=>{

    let newsElement = props.newsPage.news.map( news => <New news={news.post}  /> );

    let news = React.createRef()


    let addNews = () => {
        props.dispatch(addNewsActionCreator());
        console.log(STATE);
    }

    let onNewsChange = () => {
        let text = news.current.value;
        props.dispatch(updateNewsTextActionCreator(text));
    }

    return(
        <div>
            <div>
                <textarea
                    ref={news}
                    value={props.newNewsText}
                    onChange={onNewsChange}
                />
            </div>
            <div><button onClick={addNews}>add</button></div>
            <div>{ newsElement }</div>
        </div>
    )
}
export default News;