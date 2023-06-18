import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchStatus:boolean = false
  badgeQuantity!:number
  Bars = faBars
  cart = faCartShopping
  dropdown!:boolean

  constructor( private dailog:MatDialog) { }

  ngOnInit(): void {
    if(localStorage.length != 0)
    this.badgeQuantity = localStorage.length
  }

  dropdownBtn() {
    this.dropdown = this.dropdown? false : true
  }

  // search() {
  //   if(this.searchStatus == false) {
  //     this.searchStatus = true
  //   }
  // }
}
