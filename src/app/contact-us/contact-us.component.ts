import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert/alert.service';

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
    this.alertService.activateAlert(null);
    this.contactForm.reset();
  }
}
