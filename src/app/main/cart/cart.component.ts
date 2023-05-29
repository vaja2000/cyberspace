import { Component, OnInit } from '@angular/core';
import { FirebaseClientService } from 'src/app/services/firebase-client.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData:any[] = []

  constructor ( private firebase:FirebaseClientService ) { }


  ngOnInit(): void {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      this.firebase.getServices().subscribe((Response:any) => {
        Response.forEach((element:any) => {
          const fbKey = element.payload.doc.id
          if(fbKey == key) {
            this.cartData.push(element.payload.doc.data())
          }
        });
      })
    }
  }

}