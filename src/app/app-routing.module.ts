import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/components/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { SkillsComponent } from './features/skills/components/skills/skills.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
