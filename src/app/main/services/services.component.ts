import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  random:any[] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  constructor( private modal:MatDialog ) { }

  openDetail() {
    const modalRef = this.modal.open(DetailsComponent);
  }

  ngOnInit(): void {
  }

}
