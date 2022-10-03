import { Component, OnInit, Input } from '@angular/core';
import { IAbout } from '../../dtos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input() datas?: IAbout
  constructor() { }

  ngOnInit(): void {
  }

}
