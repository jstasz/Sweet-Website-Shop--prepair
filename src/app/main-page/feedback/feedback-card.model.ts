export class FeedbackCard {
    constructor(public userName: string, public description: string, public opinion: number) {
      this.userName = userName;
      this.description = description
      this.opinion = opinion
    }
  }