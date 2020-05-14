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

  getPosts() {
    const url = 'http://localhost:3000/api/posts';
    this.http
      .get<IPost[]>(url)
      .pipe(
        map((postData) => {
          return postData.map((post) => {
            return {
              id: post.id,
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

  addPost(post: IPost) {
    const url = 'http://localhost:3000/api/posts';
    this.http.post<IPost[]>(url, post).subscribe((data) => {
      this.postsList.push(post);
      this.postsUpdate.next([...this.postsList]);
    });
  }
}
