import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  slides = [
    {img: "/assets/images/gallery/1.png", data:"Open mic @Cup and Kitaab"},
    {img: "/assets/images/gallery/2.png", data:"Painting event on the ocassion of Basant Panchami"},
    {img: "/assets/images/gallery/3.png", data:"Painting workshop hosted by abcd  @Cup and Kitaab"},
    {img: "/assets/images/gallery/4.png", data:"Painting workshop hosted by abcd  @Cup and Kitaab"},
    {img: "/assets/images/gallery/1.png", data:"Open mic @Cup and Kitaab"},
    {img: "/assets/images/gallery/2.png", data:"Open mic @Cup and Kitaab"},
    {img: "/assets/images/gallery/3.png", data:"Open mic @Cup and Kitaab"},
    {img: "/assets/images/gallery/4.png", data:"Open mic @Cup and Kitaab"},
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
