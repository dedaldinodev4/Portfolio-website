import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from '../components/about/about.component';
import { ButtonComponent } from '../components/shared/button/button.component';
import { CoverComponent } from '../components/cover/cover.component';
import { FooterComponent } from '../components/footer/footer.component';
import { IntroComponent } from '../components/intro/intro.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ServicesComponent } from '../components/services/services.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SkillsComponent } from '../components/skills/skills.component';



@NgModule({
  declarations: [
    AboutComponent,
    ButtonComponent,
    CoverComponent,
    FooterComponent,
    IntroComponent,
    NavbarComponent,
    ServicesComponent,
    SidebarComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    ButtonComponent,
    CoverComponent,
    FooterComponent,
    IntroComponent,
    NavbarComponent,
    ServicesComponent,
    SidebarComponent,
    SkillsComponent
  ]
})
export class SharedModule { }
