import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPost } from '../../../models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  private postSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    // Render the posts
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
