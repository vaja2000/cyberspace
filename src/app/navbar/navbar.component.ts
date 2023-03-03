import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchStatus:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if(this.searchStatus == false) {
      this.searchStatus = true
    }
  }
}
