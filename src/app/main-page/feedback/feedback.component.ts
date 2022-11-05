import { Component, OnInit } from '@angular/core';

class FeedbackCard {
  constructor(public userName: string, public description: string) {
    this.userName = userName;
    this.description = description
  }
}

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
