import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
        PostActionTypes, 
        GetPostActions,
        GetPostSuccessActions,
        GetPostFailActions,
        DeletePostActions,
        DeletePostSuccessActions,
        DeletePostFailActions,
        AddPostActions,
        AddPostSuccessActions,
        AddPostFailActions
     } from '../actions/post.actions'


import { PostService } from '../services/post.service';

@Injectable()
 

export class PostEffects{

    constructor(
        private actions$: Actions,
        private service: PostService
    ) { }
 @Effect() getPosts$ = this.actions$
    .pipe(
      ofType<GetPostActions>(PostActionTypes.GET_POST),
      mergeMap(
        () => this.service.getPost()
          .pipe(
            map(data => {
                return new GetPostSuccessActions(data)
            }),
            catchError(error => of(new GetPostFailActions(error)))
          )
      ),
  )

  @Effect() deletePost$ = this.actions$
    .pipe(
      ofType<DeletePostActions>(PostActionTypes.DELETE_POST),
      mergeMap(
        (data) => this.service.deletePost(data.payload)
          .pipe(
            map(data2 => {
                return new DeletePostSuccessActions(data.payload)
            }),
            catchError(error => of(new DeletePostFailActions(error)))
          )
      ),
  )

  @Effect() addPost$ = this.actions$
    .pipe(
      ofType<AddPostActions>(PostActionTypes.ADD_POST),
      mergeMap(
        (data) => this.service.addPost(data.payload)
          .pipe(
            map(data2 => {
                return new AddPostSuccessActions(data.payload)
            }),
            catchError(error => of(new AddPostFailActions(error)))
          )
      ),
  )

  
}
