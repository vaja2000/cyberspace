import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCartPlus, faCheckCircle, faL, } from '@fortawesome/free-solid-svg-icons';
import { AlertComponent } from './alert/alert.component';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  faCheck = faCheckCircle
  faCartPlus = faCartPlus

  addCartStatus:boolean = true


  constructor(
    private alert:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    
  }
  addCart() {
    const alertRef = this.alert.open(AlertComponent)
    alertRef.afterClosed().subscribe( result => {
      if(result == true) {
        const objstring = JSON.stringify(this.data)
        localStorage.setItem(this.data.key, objstring)
        this.addCartStatus = false
      }
    })
  }

}
