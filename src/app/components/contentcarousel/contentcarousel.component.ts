import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentcarousel',
  templateUrl: './contentcarousel.component.html',
  styleUrls: ['./contentcarousel.component.sass']
})
export class ContentcarouselComponent implements OnInit {
  
  events = [
    {
      event:' ADITYA DAFTARY, MD',
      eventSubHead:'Musculoskeletal',
      eventDescription:'Fellowship in  Musculoskeletal Radiology, Hospital for Special Surgery, NY. ',
      img: '/assets/images/searchby1.png',      
    },
     {
      event:' EDIZ GURPINAR, MD',
      eventSubHead:'Neuroradiology',
      eventDescription:'Fellowship in Neuroradiology,University of Texas Southwestern Medical Center, Dallas, TX. ',
      img: '/assets/images/searchby2.png',      
    },
     {
      event:' JOSEPH IZZO, MD',
      eventSubHead:'Musculoskeletal',
      eventDescription:'Fellowship in  Musculoskeletal Radiology, Hospital for Special Surgery, NY. ',
      img: '/assets/images/searchby3.png',      
    },
    {
      event:' SUMATHI WABLE, MD',
      eventSubHead:'Musculoskeletal',
      eventDescription:'Fellowship in  Musculoskeletal Radiology, Hospital for Special Surgery, NY. ',
      img: '/assets/images/searchby4.png',      
    },
    {
      event:' JOSEPH IZZO, MD',
      eventSubHead:'Musculoskeletal',
      eventDescription:'Fellowship in  Musculoskeletal Radiology, Hospital for Special Surgery, NY. ',
      img: '/assets/images/searchby3.png',      
    },
    {
      event:' ADITYA DAFTARY, MD',
      eventSubHead:'Musculoskeletal',
      eventDescription:'Fellowship in  Musculoskeletal Radiology, Hospital for Special Surgery, NY. ',
      img: '/assets/images/searchby1.png',      
    },
       ];

    all_events = this.events;
  
  constructor() { }

  ngOnInit() {
  }

}
