import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() changePage = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }
  logInPage() {
    this.changePage.emit(true)
  }
}
