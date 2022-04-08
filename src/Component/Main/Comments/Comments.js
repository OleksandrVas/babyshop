import React from 'react';
import cl from "./Comments.module.css"
import DynamicForm from "../../DymanicForm/DynamicForm";
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, InputLabel} from "@mui/material";

const Comments = ({
                      isAdmin,
                      handlerChangeNumber,
                      posts,
                      handleSubmitForm,
                      handlerChangeName,
                      users,
                      newPost,
                      deletePost,
                      order
                  }) => {

    return (
        <div className="container">
            <div>
                {newPost.length > 0 ?
                    <h1 className={cl.headLine}>Thanks for comments </h1> :
                    <h1 className={cl.headLine}>The comments list is currently empty. </h1>
                }

                <div className={cl.containerForComments}>
                    <div>
                        {posts.map((post) =>
                            <div key={post.id} className={cl.bodyOComments}>
                                <h3> {post.name} :</h3>
                                <div className={cl.comment}>
                                    <p className={cl.userComments}>{post.body}</p>
                                    {isAdmin === true && <Button onClick={() => deletePost(post.id)}><DeleteIcon/></Button>}
                                </div>
                            </div>
                        )}
                    </div>

                </div>


                <div className={cl.dynamicFormContainer}>
                    <DynamicForm
                        placeholderFirst={"Enter your name"}
                        placeholderSecond={"Enter message"}
                        valueFirst={order.name}
                        valueSecond={order.body}
                        handlerSubmit={handleSubmitForm}
                        handlerChangeFirst={handlerChangeName}
                        handlerChangeSecond={handlerChangeNumber}
                        buttonName="Add comments"
                        typeOfPlaceholder={"text"}
                    />
                </div>

            </div>
        </div>
    )
};

export default Comments;