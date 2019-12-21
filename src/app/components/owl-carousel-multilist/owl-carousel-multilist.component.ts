import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carousel-multilist',
  templateUrl: './owl-carousel-multilist.component.html',
  styleUrls: ['./owl-carousel-multilist.component.sass']
})
export class OwlCarouselMultilistComponent implements OnInit {

 mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
 myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
 myCarouselOptions={items: 3, dots: true, nav: true};

 
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';
 
  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 4,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      },
      1500: {
        items: 8,
        nav: true,
        loop: false
      }
    }
  }
 
  images = [
    {
      text: "ADITYA DAFTARY, MD",
      image: "/assets/images/searchby2.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Musculoskeletal',
    },
    {
      text: "EDIZ GURPINAR, MD",
      image: "/assets/images/searchby3.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Neuroradiology',
    },
    {
      text: "JOSEPH IZZO, MD",
      image: "/assets/images/searchby4.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Musculoskeletal',
    },
    {
      text: "SUMATHI WABLE, MD",
      image: "/assets/images/searchby3.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Musculoskeletal',
    },
    {
      text: "ADITYA DAFTARY, MD",
      image: "/assets/images/searchby1.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Mri & Nuclear Medicine',
    },
    {
      text: "SUMATHI WABLE, MD",
      image: "/assets/images/searchby2.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Musculoskeletal',
    },
    {
      text: "JOSEPH IZZO, MD",
      image: "/assets/images/searchby3.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Musculoskeletal',
    },
    {
      text: "ADITYA DAFTARY, MD",
      image: "/assets/images/searchby4.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Musculoskeletal',
    },
    {
      text: "Sun Streak",
      image: "/assets/images/searchby3.png",
      description: 'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX.',
      subtitle: 'Button',
    }
  ];


  constructor() {
  		
   }

  ngOnInit() {
  	
  }

}
