import { EndpointService } from './../services/endpoint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpoint-list',
  templateUrl: './endpoint-list.component.html',
  styleUrls: ['./endpoint-list.component.scss']
})
export class EndpointListComponent implements OnInit {

  constructor(public endpointService: EndpointService) { }

  public endpoints: any = [];

  ngOnInit() {
    this.getEndpoints();
  }
  getEndpoints() {
    this.endpointService.getEndpoints().subscribe(x => this.endpoints = x);
  }

  callEndpoint(endpoint) {
    fetch(endpoint.url).then(x => endpoint.success = true).catch(x => endpoint.success = false);
  }
}
