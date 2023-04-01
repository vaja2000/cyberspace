import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  @Output() changePage = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  signInPage() {
    this.changePage.emit('signin')
  }

}
