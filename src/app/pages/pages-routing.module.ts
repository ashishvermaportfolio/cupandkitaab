import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BooksComponent } from './books/books.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';

import { PagesComponent } from './pages.component';
import { SpecialComponent } from './special/special.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventComponent },
  { path: 'story', component: StoryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'special', component: SpecialComponent },
  { path: 'books', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
