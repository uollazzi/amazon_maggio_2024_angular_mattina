import { Component, Input } from '@angular/core';
import { Rating } from '../../models/prodotto';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input()
  rating?: Rating;

  stelle = [1, 2, 3, 4, 5];
}
