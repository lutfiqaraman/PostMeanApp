import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPost } from '../../../models/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  public mode = 'create';
  public post: IPost;
  private postId: string;

  constructor(public postService: PostsService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.postId = paramMap.get('id');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.mode = 'create';
      }
    });
  }

  onSavePost(formData: NgForm) {
    const post: IPost = {
      title: formData.value.title,
      content: formData.value.content,
    };

    if (formData.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.postService.addPost(post);
    } else {
      this.postService.updatePost(this.postId, post);
    }

    formData.resetForm();
  }
}
