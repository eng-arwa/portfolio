import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example';
  mobilemenu:boolean=false
   
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
   
    slides = [
      {id: '1', img: "./assets/image/html.png",name:'HTML'},
      {id: '2', img: "./assets/image/css.png",name:'CSS'},
      {id: '3', img: "./assets/image/sass.png",name:'SASS'},
      {id: '4', img: "./assets/image/js.png",name:'Java Script'},
      {id: '5', img: "./assets/image/ts.png",name:'Type SCript'},
      {id: '6', img: "./assets/image/angular.png",name:'Angular Framework'},
      {id: '7', img: "./assets/image/ionic.png",name:'Ionic Framework'},
      {id: '8', img: "./assets/image/material.png",name:'Angular Material Components'},
      {id: '9', img: "./assets/image/pwa.png",name:'Progressive Web App'},
      {id: '10', img: "./assets/image/firebase.png",name:'Firebase Database'},
      {id: '10', img: "./assets/image/restapi.png",name:'REAST Api'}
    ];

  webproject = [
    {name:'mumays agency website ',linkgit:'',linkwebsite:'https://mumayaz.agency/',img:'./assets/image/mumayaz.agency.jpg'},
    {name:'topnotchsys company website',linkgit:'',linkwebsite:'https://topnotchsys.com/',img:'./assets/image/tonotchsys.jpg'},
    {name:'unimark agency website ',linkgit:'',linkwebsite:'https://eng-arwa.github.io/unimark-last-update/',img:'./assets/image/Unimark.jpg'},
    {name:'Elm company (Ajer) web Application ',linkgit:'',linkwebsite:'http://ajr.sm4ai.com/sign-in?redirectURL=%2Fajr%2Flist',img:'./assets/image/ajer.jpg'},
    {name:'Elm company (Tageem) web Application ',linkgit:'',linkwebsite:'https://elm.sm4ai.com/requests/previous',img:'./assets/image/Taqeem.jpg'},
    {name:'Portfolio Website',linkgit:'https://github.com/eng-arwa/portfolio',linkwebsite:'https://eng-arwa.github.io/portfolio/',img:'./assets/image/portofolio.jpg'},
    {name:'E-Commerce web Project ',linkgit:'https://github.com/eng-arwa/E_Commerce',linkwebsite:'',img:'./assets/image/Market.jpg'},
    {name:'Tasks Magement  web Project ',linkgit:'https://github.com/eng-arwa/TasksMangement',linkwebsite:'',img:'./assets/image/Admin.jpg'},
    {name:'MCQ web Project ',linkgit:'https://github.com/eng-arwa/MQC',linkwebsite:'',img:'./assets/image/MCQ.jpg'},
    {name:'Restaurant website',linkgit:'https://github.com/eng-arwa/Resturant-Website',linkwebsite:'https://eng-arwa.github.io/Resturant-Website/',img:'./assets/image/Restaurant.jpg'},
]

  mobileproject = [
    {name:'Blood Bank',linkgit:'',linkwebsite:'',img:''},
    {name:'E-Commerce',linkgit:'https://github.com/eng-arwa/offersCompanys',linkwebsite:'',img:'./assets/image/offers.png'},
    
  ]
  open() {
    this.mobilemenu=true
  }
  close() {
    this.mobilemenu=false
  }
}


