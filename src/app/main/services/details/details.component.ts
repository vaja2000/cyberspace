import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCartPlus, faCheckCircle, } from '@fortawesome/free-solid-svg-icons';
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
  myObj:any = {
    name: "ვინდოუსის ინსტალაცია",
    Image: "",
    list: [ "Windows 10/11","დრაივერების ინსტალაცია","აქტივაცია" ],
    price: 50,
    description: "ვინდოუსის ინსტალაცია და გამართვა Windows 10 ან Windows 11, ყველა საჭირო დრაივერის დაყენება, ვინდოუსის ლიცენზირება-აქტივაცია!",
  }

  constructor(
    private alert:MatDialog
  ) { }

  ngOnInit(): void {
  }
  addCart() {
    const alertRef = this.alert.open(AlertComponent)
    alertRef.afterClosed().subscribe( result => {
      if(result == true) {
        const objstring = JSON.stringify(this.myObj)
        localStorage.setItem("sdbcjnahuh", objstring)
        this.addCartStatus = false
      }
    })
  }

}
