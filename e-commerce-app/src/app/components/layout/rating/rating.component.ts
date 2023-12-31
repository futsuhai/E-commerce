import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {

  private _rating: number = 0;
  public stars: boolean[] = [];
  private maxStars: number = 5;
  @Input() readonly: boolean = true;
  @Input() get rating(): number {
      return this._rating;
  }

  set rating(value: number | undefined) {
      this._rating = value || 0;
      this.stars = Array(this.maxStars).fill(true, 0, this.rating)
  }
}
