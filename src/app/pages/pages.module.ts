import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { EventComponent } from './event/event.component';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GalleryComponent } from './gallery/gallery.component';
import { StoryComponent } from './story/story.component';
import { BlogComponent } from './blog/blog.component';
import { SpecialComponent } from './special/special.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [PagesComponent, EventComponent, GalleryComponent, StoryComponent, BlogComponent, SpecialComponent, BooksComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    SlickCarouselModule
  ],
 
})
export class PagesModule { }
