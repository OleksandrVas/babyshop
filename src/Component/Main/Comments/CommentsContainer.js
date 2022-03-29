import React from 'react';
import {connect} from "react-redux";
import Preloader from "../../Preloader/Preloader";
import Comments from "./Comments";
import {addOrder, deletePost} from "../../../Redux/blogReducer";


const CommentsContainer = ({posts, isLoading, users ,newPost  ,addOrder , deletePost}) => {


    if (isLoading) {
        return <Preloader/>
    }
    return (
        <div>
            <Comments posts={posts} isLoading={isLoading} addOrder={addOrder} users={users} deletePost={deletePost} newPost={newPost}/>
        </div>
    );
};


const mapStateToProps = (state) => ({
    posts: state.blog.posts,
    isLoading: state.blog.isLoading,
    users: state.blog.users,
    newPost : state.blog.newPost
})

export default connect(mapStateToProps , {addOrder , deletePost})(CommentsContainer);