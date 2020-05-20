import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { IPost } from '../../../models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  private mode = 'create';
  private postId: string;
  public post: IPost;
  postForm: FormGroup;

  constructor(
    public postService: PostsService,
    public router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      content: new FormControl(null, {
        validators: [Validators.required],
      }),
      image: new FormControl(null, { validators: [Validators.required] }),
    });
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.postId = paramMap.get('id');
        this.postService.getPost(this.postId).subscribe((postData: any) => {
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
          };

          this.postForm.setValue({
            title: this.post.title,
            content: this.post.content,
          });
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    this.postForm.patchValue({ image: file });
    this.postForm.get('image').updateValueAndValidity();

    console.log('FILE: ' + file);
    console.log('FORM: ' + this.postForm);
  }

  onCreateEditPost() {
    const post: IPost = {
      title: this.postForm.value.title,
      content: this.postForm.value.content,
    };

    if (this.postForm.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.postService.addPost(post);
    }

    if (this.mode === 'edit') {
      this.postService.updatePost(this.postId, post);
    }

    this.postForm.reset();
  }
}
