import React from "react";
import my from "./MyPosts.module.css"
import Posts from "./Posts/Posts";
import {Button} from "react-bootstrap";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.profilePage.map( posts => <Posts message={posts.message} likeCount={posts.likeCount}/>);

    let newPost = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () =>{
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return(
        <div>
            <div className={my.post}>
                <h3 className={my.textTitle}>My posts</h3>
                <div>
                    <textarea
                        ref={ newPost }
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
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