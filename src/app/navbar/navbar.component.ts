import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchStatus:boolean = false

  constructor( private dailog:MatDialog) { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchStatus == false) {
      this.searchStatus = true
    }
  }
  openModal( title:string ) {
    this.dailog.open(DialogComponent, {
      data: title
    })
  }
}
