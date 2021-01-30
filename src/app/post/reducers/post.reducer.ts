import { PostActionTypes, PostAction } from "../actions/post.actions";
import { Post } from "../models/post.model";

export interface PostState {
    posts: Post[],
    loading : boolean,
    error : string | any
}

const initialState : PostState = {
    posts : 
    [
        {
            id: 1,
            userId: 10,
            title: 'First post',
            body: 'Hello am first post',
        },
        {
            id: 2,
            userId: 11,
            title: 'Second post',
            body: 'Hello am second post',
        }
    ],
    loading: false,
    error: ''

}

export function PostReducer (state : PostState = initialState, action:PostAction){
    switch (action.type) {
        case PostActionTypes.GET_POST:
            return {
                ...state,
                loading: true
            }

         case PostActionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }

        case PostActionTypes.GET_POST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
    
        case PostActionTypes.ADD_POST:
            return {
                ...state,
                loading: true
            }

        case PostActionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            }

        case PostActionTypes.ADD_POST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case PostActionTypes.DELETE_POST:
            return {
                ...state,
                loading: true
            }

        case PostActionTypes.DELETE_POST_SUCCESS:
            let updatedPosts = [...state.posts];
            updatedPosts.splice(action.payload, 1);   
            return {
                ...state,
                posts: updatedPosts,
                loading: false
            };

        case PostActionTypes.DELETE_POST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
}