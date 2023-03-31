import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() changePage = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }
  signUpPage() {
    this.changePage.emit(false)
  }
}
