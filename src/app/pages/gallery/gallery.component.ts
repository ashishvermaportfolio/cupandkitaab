import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  clickedImage: string;
  images: any[];
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.images = [
      "/assets/images/gallery/g1.png",
      "/assets/images/gallery/1.png",
      "/assets/images/gallery/g2.png",
      "/assets/images/gallery/4.png",
      "/assets/images/gallery/g3.png",
      "/assets/images/gallery/g4.png",
      "/assets/images/gallery/g6.png",
      "/assets/images/gallery/g3.png",
      "/assets/images/gallery/3.png",
      "/assets/images/gallery/g5.png",
      "/assets/images/gallery/2.png",
      "/assets/images/gallery/g7.png",
    ];
  }

  openModal(i) {
    this.clickedImage = this.images[i];
  }
 
}
