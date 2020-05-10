import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { IPost } from '../../../models/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<IPost>();

  constructor() { }

  ngOnInit(): void {
    if (this.enteredTitle !== '' && this.enteredContent !== '') {
      this.onAddPost();
    }
  }

  onAddPost() {
    const post: IPost = {
      title: this.enteredTitle,
      content: this.enteredContent
    };

    this.postCreated.emit(post);
  }
}
