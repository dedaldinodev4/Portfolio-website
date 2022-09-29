import { Component, OnInit, Input } from '@angular/core';
import { IAbout } from '../../dtos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() data?:IAbout;
  constructor() { }

  ngOnInit(): void {
  }

}
