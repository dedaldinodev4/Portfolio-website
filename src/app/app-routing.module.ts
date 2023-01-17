import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/components/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { SkillsComponent } from './features/skills/components/skills/skills.component';
import { BasicsComponent } from './layouts/basics/basics.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
      }
    ]
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
