import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scrollNav = false;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
    this.changeNav();
  }


  changeNav():void {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        this.scrollNav =true
      } else {
        this.scrollNav = false;
      }
    })
  }
  
  goToScroller(name: string): void {
    document.getElementById(name)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    
    });

  }

} 
