import React from 'react';
import cl from "./Comments.module.css"

const Comments = ({posts, users, newPost, addOrder, deletePost}) => {

    const onAddOrder = () => {
        addOrder({name: " sasha", phone: "099", id: 65})
    }

    return (
        <div className="container">
            <div>
                {users.length > 0 ?
                    <h1 className={cl.headLine}>Thanks for order(s)</h1> :
                    <h1 className={cl.headLine}>The order list is currently empty. </h1>}
                <div className={cl.containerForComments}>
                    <div>
                        {newPost.map(post => <div>{post.name} : {post.phone}
                            <button onClick={() => deletePost(2)}>delete</button>
                        </div>)}
                    </div>
                </div>
                <button onClick={() => onAddOrder()}>Add order</button>
            </div>
        </div>
    )
};

export default Comments;