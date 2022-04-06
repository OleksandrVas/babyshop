import React, {useState} from 'react';
import {connect} from "react-redux";
import Preloader from "../../Preloader/Preloader";
import Comments from "./Comments";
import {addOrder, deletePost} from "../../../Redux/blogReducer";


const CommentsContainer = ({posts, isLoading, users, addOrder, newPost,isAdmin, deletePost}) => {

    const [order, setOrder] = useState({
        name: "",
        body: "",
    })

    const onAddOrder = () => {
        if (order.name.length < 4) {
            alert("min length - 3 ")
        }
        else if (order.name.length > 4 ) {
            return addOrder({name: order.name.slice(0,10), body: order.body, id: posts.length + 1})
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        onAddOrder()
        setOrder({
            name: "",
            body: ""
        })
    }

    const handlerChangeName = (e) => {
        setOrder(() => ({
            ...order,
            name: e.target.value
        }))
    }
    const handlerChangeNumber = (e) => {
        setOrder(() => ({
            ...order,
            body: e.target.value
        }))
    }


    if (isLoading) {
        return <Preloader/>
    }
    return (
        <div>
            <Comments
                isAdmin={isAdmin}
                order={order}
                posts={posts}
                isLoading={isLoading}
                users={users}
                handleSubmitForm={handleSubmitForm}
                handlerChangeName={handlerChangeName}
                handlerChangeNumber={handlerChangeNumber}
                deletePost={deletePost}
                newPost={newPost}/>
        </div>
    );
};


const mapStateToProps = (state) => ({
    posts: state.blog.posts,
    isLoading: state.blog.isLoading,
    users: state.blog.users,
    newPost: state.blog.newPost,
    isAdmin : state.authReduce.isAdmin
})

export default connect(mapStateToProps, {addOrder, deletePost})(CommentsContainer);