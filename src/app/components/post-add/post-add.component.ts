import { Component } from '@angular/core';
import { PostDTO } from '../../models/post';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  // template-driven forms
  // https://angular.dev/guide/forms
  model: PostDTO = new PostDTO();

  constructor(private bs: BlogService, private router: Router) {

  }

  aggiungiPost() {
    this.model.userId = 1;
    this.bs.addPost(this.model).subscribe(p => {
      this.router.navigate(['/articoli']);
      // this.model = new PostDTO();
    });
  }
}
