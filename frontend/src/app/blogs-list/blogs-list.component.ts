import { Component, OnInit } from '@angular/core';
import { BlogService } from "../services/blog.service";
import { Observable } from "rxjs";
import { Blog } from "../models/blog-model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  /**
   *Creates an instance of BlogsListComponent.
  * @param {BlogService} blogService
  * @param {Router} router
  * @memberof BlogsListComponent
  */
  constructor(private blogService:BlogService, private router:Router) { }

  blogsList: Array<Blog>;
  
  activeBlog: Blog;
  activeBlogImage: string;
  activeBlogTitle: string;
  activeBlogAuthor: string;

  ngOnInit() {
    this.getBlogs();
  }

  /**
   *
   * Get list of blogs
   * @memberof BlogsListComponent
   */
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

  /**
   *
   * View a specific blog
   * @param {Blog} blog
   * @memberof BlogsListComponent
   */
  viewBlogDetail(blog: Blog) {
    this.blogService.blog = blog;
    this.router.navigate(['/blog-detail']);
  }
}
