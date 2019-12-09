import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blogs-list/blog.service";
import { Blog } from '../blogs-list/models/blog-model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blogData: Blog;
  ngOnInit() {
    this.blogData = this.blogService.blog;
  }

}
