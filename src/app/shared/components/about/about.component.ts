import { Component, OnInit, Input } from '@angular/core';
import { skills, skills_info } from '../../data';
import { IAbout, ISkill } from '../../dtos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() data?:IAbout;
  skills: ISkill[] = skills;
  skill_info: IAbout = skills_info

  constructor() { }

  ngOnInit(): void {
  }

}
