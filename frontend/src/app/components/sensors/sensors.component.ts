import { Component, OnInit } from '@angular/core';

import {SensorService} from '../../services/sensor.service';
import { NgForm } from '@angular/forms';
import { Sensor } from 'src/app/models/sensor';

declare var M: any;

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css'],
  providers: [SensorService]
})
export class SensorsComponent implements OnInit {

  constructor(private sensorService : SensorService) { }

  ngOnInit() {
    this.getSensors();
  }


  editSensor(sensor: Sensor) {
    this.sensorService.selectedSensor = sensor;
  }

  deleteSensor(_id: string) {
    if(confirm('Esta Ud seguro que desea eliminar el sensor?'))
    {
      this.sensorService.deleteSensor(_id)
      .subscribe(res => {
        console.log(_id);
        M.toast({html: 'Delete Successfuly'});
        this.getSensors();
        });
    }
  }

  getSensors() {
    this.sensorService.getSensors().subscribe(res=>{
    this.sensorService.sensors = res as Sensor[];
    console.log(res);
     });
  }

  addSensor(form: NgForm) {
    if (form.value._id) {
      this.sensorService.putSensor(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Update Successfuly'});
        this.getSensors();
      })
    } else {
      this.sensorService.postSensor(form.value).subscribe(res=>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly'});
        this.getSensors();
        });
    }
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.sensorService.selectedSensor = new Sensor();
    }
  }

}
