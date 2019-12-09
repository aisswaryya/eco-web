import { Component, OnInit } from '@angular/core';
import { BlogService } from "./blog.service";
import { Observable } from "rxjs";
import { Blog } from "./models/blog-model";

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  blogsList: Array<Blog>;
  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    let blogsList$: Observable<Array<Blog>> = this.blogService.getBlogsList();
    blogsList$.subscribe(blogsList => {
      this.blogsList = blogsList['articles'];
    });
  }

}
