import React from "react";
import my from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {Button} from "react-bootstrap";

const MyPosts = (props) => {

    let postsElements = props.posts.map( posts => <Posts message={posts.message} likeCount={posts.likeCount}/>);

    let newPost = React.createRef();

    let addPost = () => {
        let postText = newPost.current.value;
        alert(postText);
    }

    return(
        <div>
            <div className={my.post}>
                <h3 className={my.textTitle}>My posts</h3>
                <div>
                    <textarea ref={ newPost }></textarea>
                </div>
                <div>
                    <Button onClick={ addPost }>ADD POST</Button>
                </div>
            </div>
            { postsElements }
        </div>
    )
}

export default MyPosts;