import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  slides = [
    {img: "assets/images/blog/1.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/2.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/3.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/1.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/2.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/3.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},

    {img: "assets/images/blog/1.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/2.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},
    {img: "assets/images/blog/3.png", subhead:"23 July, 2021", head:'This Kale, Quinoa, and Roasted Veggie Salad Tastes Like Fall in a Bowl', para:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."},

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
        breakpoint: 768,
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
