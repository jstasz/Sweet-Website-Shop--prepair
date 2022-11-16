import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake-designer.servis';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  constructor(private cakeService: CakeService) { }

  ngOnInit(): void {
  }

  onCreateCake() {
    this.cakeService.createCake()
  }
}
