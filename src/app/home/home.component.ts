import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import * as $ from 'jquery' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menu: any[] = [];
  menuTitles: any[] = [];
  menuTitleKeys: any[] = [];
  selectedMenu: any [] = [];
  activeMenuTitleIndex: number = 0;
  activeMenuTitle: string = '';
  viewMore: boolean = false;
  slides = [
    { img: "assets/images/dd2.png", head: "Licemsed to Chill", data: "Farmhouse grain bread, homemaden beet hummus, sliced avocado, dukkah & fresh raspberries", view: "Go to Our Specials" },
    { img: "assets/images/dd3.png", head: "SIZZLER SMOKE NIGHTS", data: "Farmhouse grain bread, homemaden beet hummus, sliced avocado, dukkah & fresh raspberries", view: "Go to Our Specials" },
    { img: "assets/images/dd2.png", head: "Licemsed to Chill", data: "Farmhouse grain bread, homemaden beet hummus, sliced avocado, dukkah & fresh raspberries", view: "Go to Our Specials" },
    { img: "assets/images/dd3.png", head: "SIZZLER SMOKE NIGHTS", data: "Farmhouse grain bread, homemaden beet hummus, sliced avocado, dukkah & fresh raspberries", view: "Go to Our Specials" }
  ];

  testimonials = [
    { img: "assets/images/home/review.jpg", name: "Jane Doe", data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like", designation: "Producer & Director" },
    { img: "assets/images/home/review.jpg", name: "Jane Doe", data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like", designation: "Producer & Director" },
    { img: "assets/images/home/review.jpg", name: "Jane Doe", data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like", designation: "Producer & Director" },
    { img: "assets/images/home/review.jpg", name: "Jane Doe", data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like", designation: "Producer & Director" },
    { img: "assets/images/home/review.jpg", name: "Jane Doe", data: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like", designation: "Producer & Director" },
  ];
  banners = [
    { img: "assets/images/home/banner/4.jpg", header: "Welcome", para: "Discover the taste of warmth !", },
  ];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },

    ]
  };
  slideConfig1 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1
        }
      },


    ]
  };
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,

  };
  constructor(private httpClient: HttpClient,) { }
  ngOnInit(): void {
    //     $(document).ready(function() {
    //  $(window).scroll(function() {
    //    if ($(document).scrollTop() > 20) {
    //      $(".header").addClass("test");
    //    } else {
    //      $(".header").removeClass("test");
    //    }
    //  });
    // });
    this.getMenu();
  }

  getMenu() {
    this.httpClient.get("assets/data/menu.json").subscribe((data: any) => {
      this.menu = data.menu;
      console.log(this.menu)
      this.getMenuTitles();
    });
  }

  getMenuTitles() {
    let keys: any[] = [];
    this.menu.forEach(element => {
      keys.push(Object.keys(element)[0]);
    });
    this.menuTitleKeys = keys;
    this.activeMenuTitle = this.menuTitleKeys[0];
    this.capitalize();
  }

  capitalize() {
    this.menuTitleKeys.forEach((str,index) => {
      var i, frags = str.split('_');
      for (i=0; i<frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
      }
      this.menuTitles[index] = frags.join(' ');
    })
    this.getActiveMenuTitle(0);
  }

  getActiveMenuTitle(index) {
    this.viewMore = false;
    this.activeMenuTitle = this.menuTitleKeys[index];
    this.activeMenuTitleIndex = index;
    this.selectedMenu = this.menu[index][this.activeMenuTitle] || [];
  }

}
