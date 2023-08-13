import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books =  [];

  constructor() { }

  ngOnInit(): void {
    this.books = [
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
      {img:'assets/images/story/book.png', name:'Farenheit 451 ', writer:'by Ray Bradbury '},
    ];
   
  }
  bookConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  };
}
