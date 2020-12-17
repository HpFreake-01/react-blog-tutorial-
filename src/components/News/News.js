import React from "react";
import New from "./New/new";
import n from "../News/New/new.module.css"

const News =(props)=>{

    let newsElement = props.news.map( news => <New news={news.post} id={news.id}/> )

    return(
        <div>
            {newsElement}
        </div>
    )
}
export default News;