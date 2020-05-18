import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsList: IPost[] = [];
  private postsUpdate = new Subject<IPost[]>();
  private url: string;

  constructor(private http: HttpClient, private router: Router) {}

  // Posts - get all posts
  getPosts() {
    this.url = 'http://localhost:3000/api/posts';

    this.http
      .get<IPost[]>(this.url)
      .pipe(
        map((postFormData) => {
          return postFormData.map((post: any) => {
            return {
              id: post._id,
              title: post.title,
              content: post.content,
            };
          });
        })
      )
      .subscribe((postFormData) => {
        this.postsList = postFormData;
        this.postsUpdate.next([...this.postsList]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdate.asObservable();
  }

  // Post - get a post
  getPost(postId: string) {
    this.url = 'http://localhost:3000/api/posts/' + postId;
    return this.http.get<IPost>(this.url);
  }

  // Post - add a new post
  addPost(post: IPost) {
    this.url = 'http://localhost:3000/api/posts';

    this.http.post(this.url, post).subscribe((data: any) => {
      post.id = data.postId;
      this.postsList.push(post);
      this.postsUpdate.next([...this.postsList]);
      this.router.navigate(['/']);
    });
  }

  // Post - update a post
  updatePost(postId: string, post: IPost) {
    this.url = 'http://localhost:3000/api/posts/' + postId;
    this.http.put(this.url, post).subscribe((response) => {
      const updatePosts = [...this.postsList];
      const oldPostIndex = updatePosts.findIndex(p => p.id === post.id);

      updatePosts[oldPostIndex] = post;

      this.postsList = updatePosts;
      this.postsUpdate.next([...this.postsList]);
      this.router.navigate(['/']);
    });
  }

  // Post - delete a post
  deletePost(postId: any) {
    this.url = 'http://localhost:3000/api/posts/' + postId;

    this.http.delete(this.url).subscribe(() => {
      const updatePosts = this.postsList.filter((post) => post.id !== postId);
      this.postsList = updatePosts;
      this.postsUpdate.next([...this.postsList]);
    });
  }
}
