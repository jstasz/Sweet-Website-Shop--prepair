import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'message': new FormControl(null)
    });
  }

  onSubmit() {
    console.log('submit!')
  }

}
