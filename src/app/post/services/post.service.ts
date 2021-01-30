import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Post } from "../models/post.model";


@Injectable({
    providedIn: 'root'
})

export class PostService{

    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http : HttpClient){}

    getPost(){
        return this.http.get<Post[]>(`${this.baseUrl}/posts?_limit=10`);
    }

    addPost(post: Post){
        return this.http.post<Post | any>(`${this.baseUrl}/posts`, post);
    }

    deletePost(id: Number){
        return this.http.delete<any>(`${this.baseUrl}/posts/${id}`);
    }

}