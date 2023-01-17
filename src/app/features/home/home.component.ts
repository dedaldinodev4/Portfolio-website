import { Component, OnInit } from '@angular/core';
import { IAbout } from 'src/app/shared/dtos';
import { datas } from 'src/app/shared/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  intro_datas: IAbout = datas.intro;
  about_datas: IAbout = datas.about;

  constructor() {}

  ngOnInit(): void {
  }


}
