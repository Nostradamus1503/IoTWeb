import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { MeasurementsComponent } from './components/measurements/measurements.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    MeasurementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
