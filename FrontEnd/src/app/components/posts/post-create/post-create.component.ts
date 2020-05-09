import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = '';
  userInput = '';

  onAddPost() {
    this.newPost = this.userInput;
  }
}
