import { Component, OnInit } from '@angular/core';
import { ProductsCard } from '../products/products-card.model';
import { FeedbackCard } from './feedback-card.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackCards: FeedbackCard[] = [
    new FeedbackCard('Ania Cz.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente optio nulla error earum eum temporibus voluptatem nostrum repellendus explicabo!'),
    new FeedbackCard('Kalina M.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente optio nulla error earum eum temporibus voluptatem nostrum'),
    new FeedbackCard('Stefan K.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente optio nulla error earum eum temporibus')
  ]

  constructor() { }

  ngOnInit() {
  }

}
