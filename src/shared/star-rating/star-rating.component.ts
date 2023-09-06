import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{
  
  @Input() rating!: number;
  stars: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) {
      this.updateStars();
    }
  }

  private updateStars(): void {
  const roundedRating = Math.round(this.rating);
  const maxStars = 5;

  this.stars = Array(maxStars).fill('star_border');

  for (let i = 0; i < roundedRating; i++) {
  this.stars[i] = 'star';
  }
  }
}
