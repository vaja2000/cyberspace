import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  active:any;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { title: string } ) { }

  ngOnInit(): void {
    this.active = this.data
  }
  onChangePageSignIn(e:string) {
    this.active = e
  }
  onChangePageSignUp(e:string) {
    this.active = e
  }

}
