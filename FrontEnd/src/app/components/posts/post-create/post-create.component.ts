import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor() { }

  ngOnInit(): void {
    this.onAddPost();
  }

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredTitle
    };
  }
}
