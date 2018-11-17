import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Measurement } from '../models/measurement';
import {MeasurementsComponent} from 'src/app/components/measurements/measurements.component';



@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  selectedMeasurement: Measurement;
  measurements: Measurement[];
  readonly URL_API = 'http://localhost:9000/measurements';

  constructor(private http: HttpClient) {
    this.selectedMeasurement = new Measurement();
   }
   getMeasurements() {
    return this.http.get(this.URL_API);
  }

  getMeasurement(sensor_id: Number) {
//    return this.http.get(this.URL_API);
    return this.http.get(this.URL_API + '/' + sensor_id);
    console.log(this.URL_API + '/' + sensor_id);
  }
  putMeasurement(measurement: Measurement) {
    return this.http.put(this.URL_API + `/${measurement.sensor_id}`, measurement);
  }

  deleteMeasurement(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
