import { Component, OnInit, Input } from '@angular/core';
import {Store} from '@ngrx/store';
import AppState from '../../app/post/models/app.state.model';
import { DeletePostActions } from '../../app/post/actions/post.actions';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent implements OnInit {

  @Input()
  index: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  deletePost(){
    console.log('llefa')
    this.store.dispatch(new DeletePostActions(this.index));
  }
}
