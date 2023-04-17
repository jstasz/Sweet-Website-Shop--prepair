import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert/alert.service';

import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDSRlmG7zwMfbUU9XMh-aJ9ceNp-3EjwAY",
  authDomain: "sweet-website-contact.firebaseapp.com",
  projectId: "sweet-website-contact",
  storageBucket: "sweet-website-contact.appspot.com",
  messagingSenderId: "1058781079630",
  appId: "1:1058781079630:web:d387b9b5035f0410417b1f",
  measurementId: "G-N6Z7FXHQ81"
};

const app = initializeApp(firebaseConfig);
const contactMessages = getDatabase();

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  activeAlert: boolean = false;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    this.alertService.activeAlertChange.subscribe(alert => this.activeAlert = alert);
  }

  onSubmit() {
    this.sendMessage();
    this.alertService.activateAlert(null);
    this.contactForm.reset();
  }

  sendMessage() {
    let name = this.contactForm.value.username;
    let email = this.contactForm.value.email;
    let message = this.contactForm.value.message;

    set(ref(contactMessages, "message" + name), {
      name: name,
      email: email,
      message: message
    });
  }
}
