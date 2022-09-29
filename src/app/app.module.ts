import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CoverComponent } from './shared/components/cover/cover.component';
import { ButtonComponent } from './shared/components/shared/button/button.component';
import { AboutComponent } from './shared/components/about/about.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ServicesComponent } from './shared/components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoverComponent,
    ButtonComponent,
    AboutComponent,
    SidebarComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
