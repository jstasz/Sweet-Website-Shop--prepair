import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  title: string = `Hi, I'm Justyna`;
  description: string = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
  asperiores commodi illum voluptatibus quisquam earum veniam minus at
  similique quis alias nulla soluta voluptatem, ea dignissimos quasi
  repellendus dolorem fugit. Quia rem nostrum nemo mollitia expedita.`

  constructor() { }

  ngOnInit(): void {
  }

}
