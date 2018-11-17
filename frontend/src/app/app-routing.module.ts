import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SensorsComponent } from 'src/app/components/sensors/sensors.component';
import { MeasurementsComponent } from 'src/app/components/measurements/measurements.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: 'offers', component: OffersComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  //{ path: 'book/:id', component: DetailsBookComponent },
  //{ path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path: 'components/sensors', component: SensorsComponent },
  { path: 'measurements', component: MeasurementsComponent }
  //,
  //{ path: 'components/measurements', component: ProfileComponent, canActivate: [AuthGuard] }
  //, // TODO: only users auth
  //{ path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
