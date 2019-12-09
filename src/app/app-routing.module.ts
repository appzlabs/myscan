import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'list', component: ListComponent },
  { path: 'price', component: PriceComponent },
  { path: 'search', component: SearchComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
