import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { IPost } from '../../../models/post.model';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  totalPosts = 10;
  currentPage = 1;
  postsPerPage = 2;
  pageSizeOptions = [1, 5, 10, 25, 50];
  private postSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    // Render the posts
    this.postsService.getPosts(this.postsPerPage, this.currentPage);

    this.postSub = this.postsService
      .getPostUpdateListener()
      .subscribe((posts: IPost[]) => {
        this.posts = posts;
      });
  }

  onChangedPage(pagedata: PageEvent) {
    this.currentPage  = pagedata.pageIndex + 1;
    this.postsPerPage = pagedata.pageSize;

    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  }

  onDeletePost(postID: string) {
    this.postsService.deletePost(postID);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
