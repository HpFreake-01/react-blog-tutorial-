import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import Posts from "./MyPosts/Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return(
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;