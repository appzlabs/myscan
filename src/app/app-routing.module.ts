import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PriceComponent } from './price/price.component';
import { MainComponent } from './main/main.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientDownloadReportComponent } from './patient-download-report/patient-download-report.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', component: SiteLayoutComponent,
        children:[{
            path: 'createaccount',  component:CreateaccountComponent},
            { path: 'list', component: ListComponent},
            { path: 'price', component: PriceComponent },
            { path: 'search', component: SearchComponent},
            
        ]
  },
  
  
  { path: '', component: MainComponent,
        children:[{
            path: 'patient',  component:PatientComponent},
            { path: 'patient-details', component: PatientDetailsComponent},
            { path: 'patient-download-report', component: PatientDownloadReportComponent},
            { path: 'search-details', component: SearchDetailsComponent},            
        ]
    },
  { path: 'thanks', component: ThanksComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
