import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sensor } from '../models/sensor';
import {SensorsComponent} from '../components/sensors/sensors.component';



@Injectable({
  providedIn: 'root'
})
export class SensorService {

  selectedSensor: Sensor;
  sensors: Sensor[];
  readonly URL_API = 'http://localhost:9000/sensors';

  constructor(private http: HttpClient) {
    this.selectedSensor = new Sensor();
   }

  getSensors() {
    return this.http.get(this.URL_API);
  }

  postSensor(sensor: Sensor) {
    return this.http.post(this.URL_API, sensor);
  }

  putSensor(sensor: Sensor) {
    return this.http.put(this.URL_API + `/${sensor._id}`, sensor);
  }

  deleteSensor(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
