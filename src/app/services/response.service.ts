import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  constructor(private db: AngularFirestore) { }
  getResponse(id) {
    return this.db.collection('responses').doc(id).valueChanges();
  }
}
