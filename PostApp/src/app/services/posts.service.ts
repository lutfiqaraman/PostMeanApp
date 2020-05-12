import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsList: IPost[] = [];
  private postsUpdate = new Subject<IPost[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = 'http://localhost:3000/api/posts';
    this.http.get<IPost[]>(url).subscribe((postData) => {
      this.postsList = postData;
      this.postsUpdate.next([...this.postsList]);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdate.asObservable();
  }

  addPost(post: IPost) {
    this.postsList.push(post);
    this.postsUpdate.next([...this.postsList]);
  }
}
