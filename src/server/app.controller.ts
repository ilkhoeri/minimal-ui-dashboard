import { Controller, Get, Param, ParseIntPipe, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { map, toArray } from 'rxjs';
import { ParamsInterceptor } from './params.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    return {};
  }

  @Get(':id')
  @Render('[id]')
  public blogPost(@Param('id') id: string) {
    return {};
  }

  @Get('/api/blog-posts')
  public listBlogPosts() {
    return this.appService.getBlogPosts();
  }

  @Get('/api/blog-posts/:id')
  public getBlogPostById(@Param('id', new ParseIntPipe()) id: string) {
    return this.appService.getBlogPost(id);
  }


}
