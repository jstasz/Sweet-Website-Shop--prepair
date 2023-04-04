import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email: string = 'justsweet@gmail.com';
  phone: number = 573576436;
  address: string =  '20425 xxx Road';
  openingHours: {week : string, weekend : string} = {
    week : '9AM-5PM',
    weekend : '10AM-3PM'
  };

  constructor() { }

  ngOnInit(): void {
  }
}


