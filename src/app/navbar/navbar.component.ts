import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchStatus:boolean = false
  badgeQuantity!:number

  constructor( private dailog:MatDialog) { }

  ngOnInit(): void {
    if(localStorage.length != 0)
    this.badgeQuantity = localStorage.length
  }

  search() {
    if(this.searchStatus == false) {
      this.searchStatus = true
    }
  }
}
