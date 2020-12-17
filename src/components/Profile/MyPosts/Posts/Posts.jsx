import React from "react";
import post from "./Posts.module.css"

const Posts = (props) => {
    return(
        <div>
            <div className={post.wrap}>
                <img className={post.img} src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png"/>
                {props.message}
                <div className={post.likeCount}>
                    ❤ {props.likeCount}
                </div>
            </div>
        </div>
        )
}

export default Posts;