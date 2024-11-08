import { Injectable, NotFoundException } from '@nestjs/common';
import { from, of, toArray } from 'rxjs';

const BLOG_POSTS = [
  { id: '1', title: 'Lorem Ipsum - 1' },
  { id: '2', title: 'Dolore Sit - 2' },
  { id: '3', title: 'Amet - 1' },
];

@Injectable()
export class AppService {
  getBlogPosts() {
    return from(BLOG_POSTS).pipe(toArray());
  }

  getBlogPost(postId: string) {
    const blogPost = BLOG_POSTS.find(({ id }) => id === postId);

    if (!blogPost) {
      throw new NotFoundException();
    }

    return of(blogPost);
  }
}
