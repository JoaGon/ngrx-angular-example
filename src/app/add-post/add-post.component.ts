import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import AppState from '../../app/post/models/app.state.model';
import { Post } from '../../app/post/models/post.model';
import {AddPostActions, PostAction} from '../../app/post/actions/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    id: null,
    userId: null,
    title: '',
    body: ''
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  createPost(){
    this.post.id = Math.floor(Math.random() * 10);
    this.post.userId =  Math.floor(Math.random() * 100);
    this.store.dispatch(new AddPostActions({...this.post}));
    this.post.title = '';
    this.post.body = '';
  }

}
