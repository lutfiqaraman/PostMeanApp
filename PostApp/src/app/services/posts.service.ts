import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsList: IPost[] = [];
  private postsUpdate = new Subject<IPost[]>();

  constructor() { }

  getPosts() {
    return [...this.postsList];
  }

  getPostUpdateListener() {
    return this.postsUpdate.asObservable();
  }

  addPost(post: IPost) {
    this.postsList.push(post);
    this.postsUpdate.next([...this.postsList]);
  }
}
