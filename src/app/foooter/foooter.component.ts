import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-foooter',
  templateUrl: './foooter.component.html',
  styleUrls: ['./foooter.component.scss']
})
export class FoooterComponent implements OnInit {

  fac = faFacebookF

  constructor() { }

  ngOnInit(): void {
  }

}
