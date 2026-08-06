import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  @Input() category = '';

  @Input() title = '';

  @Input() description = '';

  @Input() price = '';

  @Input() image = '';

}