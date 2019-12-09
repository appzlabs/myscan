import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public loc;
  title = 'my-scan';

  constructor(private route:ActivatedRoute,private router:Router, location: Location) {
  	this.loc = location.path();
  }
  
  ngOnInit() {
        
        console.log(this.loc);
    }

}
