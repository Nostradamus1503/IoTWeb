import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensorsComponent } from 'src/app/components/sensors/sensors.component';
import { MeasurementsComponent } from 'src/app/components/measurements/measurements.component';

const routes: Routes = [
  { path: 'sensors', component: SensorsComponent },
  { path: 'measurements', component: MeasurementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
