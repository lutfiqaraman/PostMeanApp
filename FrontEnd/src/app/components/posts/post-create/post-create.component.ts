import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { IPost } from '../../../models/post.model';
import { NgForm } from '@angular/forms';

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
  }

  onAddPost(formData: NgForm) {
    if (formData.invalid) {
      return;
    }

    const post: IPost = {
      title: formData.value.title,
      content: formData.value.content
    };

    this.postCreated.emit(post);
  }
}
