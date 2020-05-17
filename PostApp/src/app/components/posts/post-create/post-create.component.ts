import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPost } from '../../../models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  private mode = 'create';
  private postId: string;
  private post: IPost;


  constructor(
    public postService: PostsService,
    public router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.postId = paramMap.get('id');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
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
