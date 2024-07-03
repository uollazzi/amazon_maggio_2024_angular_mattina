import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostDTO } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/articoli");
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>("http://localhost:3000/articoli/" + id);
  }

  addPost(post: PostDTO) {
    // console.log(post);
    // chiamata ajax POST
    return this.http.post<Post>("http://localhost:3000/articoli", post);
  }
}
