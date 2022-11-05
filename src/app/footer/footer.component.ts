import { Component, OnInit } from '@angular/core';

class ContactDetail {
  constructor(public contactIcon: string, public contactInfo: string) {
    contactIcon = this.contactIcon;
    contactInfo = this.contactInfo
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactDetails: ContactDetail[] = [
    new ContactDetail('fa-solid fa-phone', '000 000 000'),
    new ContactDetail('fa-solid fa-envelope', 'justsweet@gmail.com'),
    new ContactDetail('fa-brands fa-facebook-messenger', 'just sweet')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


