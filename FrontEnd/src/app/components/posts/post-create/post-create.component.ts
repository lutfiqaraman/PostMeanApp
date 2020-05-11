import { Component, OnInit } from '@angular/core';

import { IPost } from '../../../models/post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostsService) { }

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

    this.postService.addPost(post);
    formData.resetForm();
  }
}
