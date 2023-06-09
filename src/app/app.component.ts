import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PostService ]
})
export class AppComponent {
  constructor(private postService:PostService) {

  }

  postList = null;

  ngOnInit(){
    this.postList = this.postService.listPosts();
  }
}
