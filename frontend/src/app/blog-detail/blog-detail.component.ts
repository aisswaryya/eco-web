/**
 * Blog details component
 */
import { Component, OnInit } from '@angular/core';
import { BlogService } from "../services/blog.service";
import { Blog } from '../models/blog-model';

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
