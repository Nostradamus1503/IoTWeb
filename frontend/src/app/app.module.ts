import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SensorsComponent } from './components/sensors/sensors.component';
import { MeasurementsComponent } from './components/measurements/measurements.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    MeasurementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
