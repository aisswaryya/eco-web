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
  
  activeBlog: Blog;
  activeBlogImage: string;
  activeBlogTitle: string;
  activeBlogAuthor: string;

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    let blogsList$: Observable<Array<Blog>> = this.blogService.getBlogsList();
    blogsList$.subscribe(blogsList => {
      this.blogsList = blogsList['articles'];
      this.blogsList = this.blogsList.slice(0,10);

      this.activeBlog = this.blogsList.shift();
      this.activeBlogImage = this.activeBlog.urlToImage;
      this.activeBlogTitle = this.activeBlog.title;
      this.activeBlogAuthor = this.activeBlog.author;
    });
  }

}
