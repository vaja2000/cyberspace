import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseClientService {

  constructor( 
    private firebase:AngularFirestore,
    ) { }

  getServices():any {
    return this.firebase.collection(environment.firebaseCollection.service)
    .snapshotChanges()
  }
  // getKey(key:string):any {
  //   return this.firebase.collection(environment.firebaseCollection.service)
  //   .doc(key).
  // }
}
