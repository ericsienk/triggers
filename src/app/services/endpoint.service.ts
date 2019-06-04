import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

export interface Endpoint {
    station: string;
    stationAbv: string;
}

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  constructor(private db: AngularFirestore) { }
  getEndpoints() {
    return this.db.collection('endpoints').valueChanges();
  }
}
