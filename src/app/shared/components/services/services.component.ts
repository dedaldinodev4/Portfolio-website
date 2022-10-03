import { Component, OnInit } from '@angular/core';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  faPenNib = faPenNib;
  faCode = faCode;
  faBezierCurve = faBezierCurve;
  
  constructor() { }

  ngOnInit(): void {
  }

}
