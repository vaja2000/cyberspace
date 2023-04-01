import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() changePage = new EventEmitter<string>()
  login:any

  constructor() { }

  ngOnInit(): void {
    this.login = new FormGroup ({
      'Email': new FormControl( null, [ Validators.required, Validators.email ]),
      'Password': new FormControl( null, [ Validators.required, Validators.minLength(8)])
    })
  }
  signUpPage() {
    this.changePage.emit('signup')
  }
  forgotPasswordPage() {
    this.changePage.emit('forgot')
  }
}
