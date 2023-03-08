import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryImg: string[] = [
    'spidermanCake.jpeg',
    'frozenCake.jpeg',
    '18birthdayCake.jpeg',
    'weddingCake.jpeg',
    'travelCake.jpeg',
    'alcoholCake.webp'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
