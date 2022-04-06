
const SET_POSTS = "SET_POSTS"
const SET_USERS = "SET_USERS"
const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"

const initialValue = {
    posts: [],
    isLoading: true,
    users: [],
    page: 1,
    limit: 10,
    newPost: [
        {name: "vlad", phone: "09999" , id : 1},
        {name: "vlad", phone: "09999" , id : 2},
        {name: "vlad", phone: "09999" , id : 3}]

}

export const blogReducer = (state = initialValue, action) => {
    switch (action.type) {
        case SET_POSTS : {
            return {
                ...state,
                posts: [...action.payload],
                isLoading: false
            }
        }
        case SET_USERS : {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts , action.payload]
            }
        }
        case DELETE_POST : {
            return {...state ,  posts: state.posts.filter(p => p.id !== action.postId)}
        }


        default :
            return state
    }
}

export const setPosts = (payload) => ({type: SET_POSTS, payload})
export const setUsers = (payload) => ({type: SET_USERS, payload})
export const addOrder = (payload) => ({type: ADD_POST, payload})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

