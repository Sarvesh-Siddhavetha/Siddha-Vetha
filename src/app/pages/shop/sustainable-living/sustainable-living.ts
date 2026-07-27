import { Component } from '@angular/core';
import { HeroComponent } from '../../../components/hero/hero';
import { ChipsComponent } from '../../../components/chips/chips';
import { ProductCardComponent } from '../../../components/product-card/product-card';
import { PromiseStripComponent } from '../../../components/promise-strip/promise-strip';
@Component({
  selector: 'app-sustainable-living',
  standalone: true,
  imports: [
    HeroComponent,
    ChipsComponent,
    ProductCardComponent
  ],
  templateUrl: './sustainable-living.html',
  styleUrl: '../../../common.css'
})
export class SustainableLivingComponent {

  categories = [
    'Herbal Home Care',
    'Natural Pest Control',
    'Eco Household',
    'Organic Lifestyle Kits ',
    'Culinary Medicine Foods'
  ];

}