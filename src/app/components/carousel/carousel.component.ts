import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-carousel",
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {

  event_list = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'Bangalore event',
      img: '/assets/images/slider1.png',      
    },
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai event',
      img: '/assets/images/slider1.png',      
    },
     {
      event:' Event 3',
      eventLocation:'New York',
      eventDescription:'NewYork event',
      img: '/assets/images/slider1.png',      
    },
       ];

  
  current_events =  this.event_list;
  

  constructor() { }

  ngOnInit() {
  }

}
