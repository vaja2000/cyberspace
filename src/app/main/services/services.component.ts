import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';
import { FirebaseClientService } from 'src/app/services/firebase-client.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services:any[] = []
  loading:boolean = true

  constructor( 
    private modal:MatDialog,
    private firebase:FirebaseClientService,

     ) { }

  ngOnInit(): void {
    this.firebase.getServices().subscribe((resp:any) => {
      resp.forEach((element:any) => {
        this.services.push(element.payload.doc.data())
      });
      this.loading = false
    })
  }

  openDetail(key:string) {
    this.firebase.getServices().subscribe((Response:any) => {
      Response.forEach((element:any) => {
        let id = element.payload.doc.id
        console.log(id)
        let data = element.payload.doc.data()
        if(id == key) {
          this.modal.open(DetailsComponent, {
            data,
            height: '530px'
          });
        }
      });
    })
  }

}
