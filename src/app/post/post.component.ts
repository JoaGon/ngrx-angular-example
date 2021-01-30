import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from "../post/models/post.model";
import AppState from "../post/models/app.state.model";
import { GetPostActions } from "../post/actions/post.actions";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  
  posts$: Observable<Post[]>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(store => store.post.posts);
    this.error$ = this.store.select(store => store.post.error);
    this.store.dispatch(new GetPostActions());
  }

}
