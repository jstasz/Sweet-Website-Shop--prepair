import { Component, OnInit } from '@angular/core';
import { CakeDesignerService } from '../cake-designer.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private cakeDesignerService: CakeDesignerService) { }

  ngOnInit(): void {
   this.cakeDesignerService.createdCake()
  }

}
