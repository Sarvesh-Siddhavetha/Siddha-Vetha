import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
@Component({
  selector: 'app-personal-care',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    ProductCardComponent,
    PromiseStripComponent
  ],
  templateUrl: './personal-care.html',
  styleUrl: '../../../common.css'
})
export class PersonalCareComponent {

  categories = [
    'Skincare',
    'Haircare',
    'Anti-Aging',
    'Herbal Cosmetics',
    'Therapeutic Oils',
    'Bath & Body',
    'Natural Fragrance'
  ];

}