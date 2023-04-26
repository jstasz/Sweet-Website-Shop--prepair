import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  title: string = `Hi, I'm Justyna`;
  descriptionMe: string = ` Hi, I'm Justyna. For the past 5 years, 
  I've been involved in selling various types of sweets and baked goods. 
  For over 3 years, my hobby has also become designing and making artistic cakes. 
  I provide both individual orders and comprehensive services for various occasions.`
  descriptionContact: string = `If you have an idea to turn your party into a sweet paradise, 
  contact me and we will definitely come up with something.`

  constructor() { }

  ngOnInit(): void {
  }

}
