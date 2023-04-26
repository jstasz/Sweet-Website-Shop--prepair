import { Component, OnInit } from '@angular/core';
import { FeedbackCard } from './feedback-card.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedbackCards: FeedbackCard[] = [
    new FeedbackCard(
      'Ana C.', 
      `Everything is great, the service is top-notch, good communication, delicious cake, I recommend it to everyone. Thank You so much!`,
      5),
    new FeedbackCard(
      'Caroline M.', 
      `The best cake I've ever eaten in my life, and it looked stunning too. My daughter was delighted, I will definitely order again.`,
      5),
    new FeedbackCard('Steven K.', 
      `"I ordered a sweet table for our wedding on the recommendation of a friend. Mrs. Justyna asked me about everything and created a masterpiece. Everyone was delighted. Me too!"`,
      5)
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
