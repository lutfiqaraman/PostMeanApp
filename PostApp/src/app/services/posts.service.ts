import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IPost } from '../models/post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsList: IPost[] = [];
  private postsUpdate = new Subject<IPost[]>();

  constructor(private http: HttpClient) {}

  // Posts - get all posts
  getPosts() {
    const url = 'http://localhost:3000/api/posts';
    this.http
      .get<IPost[]>(url)
      .pipe(
        map((postData) => {
          return postData.map((post: any) => {
            return {
              id: post._id,
              title: post.title,
              content: post.content,
            };
          });
        })
      )
      .subscribe((postData) => {
        this.postsList = postData;
        this.postsUpdate.next([...this.postsList]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdate.asObservable();
  }

  // Post - get a post
  getPost(postId: string) {
    return {...this.postsList.find(p => p.id === postId)};
  }


  // Post - add a new post
  addPost(post: IPost) {
    const url = 'http://localhost:3000/api/posts';

    this.http.post(url, post).subscribe((data: any) => {
      post.id = data.postID;
      this.postsList.push(post);
      this.postsUpdate.next([...this.postsList]);
    });
  }

  // Post - delete a post
  deletePost(postID: any) {
    const url = 'http://localhost:3000/api/posts/' + postID;

    this.http.delete(url).subscribe(() => {
      const updatePosts = this.postsList.filter(post => post.id !== postID);
      this.postsList = updatePosts;
      this.postsUpdate.next([...this.postsList]);
    });
  }
}
