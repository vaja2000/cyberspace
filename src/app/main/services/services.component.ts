import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  random:any[] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  constructor() { }

  ngOnInit(): void {
  }

}
