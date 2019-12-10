import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from "../models/blog-model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogURl: string;
  blog: Blog;

  /**
   *Creates an instance of BlogService.
  * @param {HttpClient} http
  * @memberof BlogService
  */
  constructor(private http: HttpClient) { 
    this.blogURl = "https://newsapi.org/v2/everything?q=pollution&from=2019-12-05&sortBy=popularity&apikey=d00b5f482c1e475bbfc210d3b695e643";
  }

  /**
   * Returns all blogs.
   *
   * @return {Observable<Array<Blog>>} {Observable blog array of blogs}
  
  */
  getBlogsList(): Observable<Array<Blog>> {
    return this.http.get<Array<Blog>>(this.blogURl);
  }
}