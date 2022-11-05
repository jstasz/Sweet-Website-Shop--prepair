import { Component, OnInit } from '@angular/core';

class FeedbackCard {
  constructor(public userName: string, public description: string, public opinion: number) {
    this.userName = userName;
    this.description = description
    this.opinion = opinion
  }
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackCards: FeedbackCard[] = [
    new FeedbackCard('Ania Cz.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente optio nulla error earum eum temporibus voluptatem nostrum repellendus explicabo!', 5),
    new FeedbackCard('Kalina M.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente optio nulla error earum eum temporibus voluptatem nostrum', 5),
    new FeedbackCard('Stefan K.', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem sapiente optio nulla error earum eum temporibus', 5)
  ]

  constructor() { }

  ngOnInit() {
  }

  createStars(opinion: number) {
    const star = '<i class="fa-solid fa-star"></i>'
    const stars = star.repeat(opinion)

    return stars
  }
}
