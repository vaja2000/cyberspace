import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  active:any = true

  constructor( @Inject(MAT_DIALOG_DATA) public data: { title: boolean } ) { }

  ngOnInit(): void {
    this.active = this.data
  }
  onChangePageSignIn(e:any) {
    this.active = e
  }
  onChangePageSignUp(e:boolean) {
    this.active = e
  }

}
