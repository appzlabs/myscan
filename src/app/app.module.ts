import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { ContentcarouselComponent } from './components/contentcarousel/contentcarousel.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateaccountComponent,
    HomeComponent,
    ListComponent,
    PriceComponent,
    CarouselComponent,
    SearchComponent,
    SearchDetailsComponent,
    ContentcarouselComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
