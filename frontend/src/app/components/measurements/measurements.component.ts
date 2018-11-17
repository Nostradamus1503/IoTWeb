import { Component, OnInit } from '@angular/core';
import {MeasurementService} from 'src/app/services/measurement.service';
import { NgForm } from '@angular/forms';
import { Measurement } from 'src/app/models/measurement';

declare var M: any;
@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css'],
  providers: [MeasurementService]  
})
export class MeasurementsComponent implements OnInit {

  constructor(private measurementService: MeasurementService) { }

  ngOnInit() {
    
    this.getMeasurements();
  }

  getMeasurements() {
    this.measurementService.getMeasurements().subscribe(res=>{
    this.measurementService.measurements = res as Measurement[];
    console.log(res);
     });
  }

  getMeasurement(sensor_id: Number) {
    this.measurementService.getMeasurement(sensor_id).subscribe(res=>{
    this.measurementService.measurements = res as Measurement[];
    console.log(res);
     });
  }
}