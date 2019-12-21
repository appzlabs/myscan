import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owl-carousel-multilist',
  templateUrl: './owl-carousel-multilist.component.html',
  styleUrls: ['./owl-carousel-multilist.component.sass']
})
export class OwlCarouselMultilistComponent implements OnInit {

 images = [1,2,3,4,5,6,7,8,9];
  
  constructor() { }

  ngOnInit() {
  	
  }

}
