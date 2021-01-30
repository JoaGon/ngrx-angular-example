import { Action } from "@ngrx/store";
import { Post } from "../models/post.model";

export enum PostActionTypes {
    ADD_POST = '[POST] Add post',
    ADD_POST_SUCCESS = '[POST] Add post success',
    ADD_POST_FAIL = '[POST] Add post fail',

    GET_POST = '[GET] posts',
    GET_POST_SUCCESS = '[GET] get posts success',
    GET_POST_FAIL = '[GET] get posts fail',

    DELETE_POST = '[DELETE] delete post',
    DELETE_POST_SUCCESS = '[DELETE] delete post success',
    DELETE_POST_FAIL = '[DELETE] delete post fail',
}

export class GetPostActions implements Action {
    readonly type = PostActionTypes.GET_POST;
}

export class GetPostSuccessActions implements Action {
    readonly type = PostActionTypes.GET_POST_SUCCESS;
    constructor(public payload: Post[]){}
}

export class GetPostFailActions implements Action {
    readonly type = PostActionTypes.GET_POST_FAIL;
    constructor(public payload: any){}
}

export class AddPostActions implements Action {
    readonly type = PostActionTypes.ADD_POST;
    constructor(public payload: Post){}
}

export class AddPostSuccessActions implements Action {
    readonly type = PostActionTypes.ADD_POST_SUCCESS;
    constructor(public payload: Post){}
}

export class AddPostFailActions implements Action {
    readonly type = PostActionTypes.ADD_POST_FAIL;
    constructor(public payload: any){}

}

export class DeletePostActions implements Action {
    readonly type = PostActionTypes.DELETE_POST;
    constructor(public payload: number){}

}

export class DeletePostSuccessActions implements Action {
    readonly type = PostActionTypes.DELETE_POST_SUCCESS;
    constructor(public payload: string | any){}
}

export class DeletePostFailActions implements Action {
    readonly type = PostActionTypes.DELETE_POST_FAIL;
    constructor(public payload: any){}
}

export type PostAction = 
    AddPostActions |
    AddPostSuccessActions|
    AddPostFailActions|
    GetPostActions|
    GetPostSuccessActions|
    GetPostFailActions|
    DeletePostActions|
    DeletePostSuccessActions|
    DeletePostFailActions;