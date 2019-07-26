import { ResponseService } from './../services/response.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-display',
  templateUrl: './temperature-display.component.html',
  styleUrls: ['./temperature-display.component.scss']
})
export class TemperatureDisplayComponent implements OnInit {
  sensorNames: any;
  sensors: any = [];
  constructor(private responseService: ResponseService) { }

  ngOnInit() {
    this.responseService.getSensors().subscribe(s => this.sensors = s);
  }
}
