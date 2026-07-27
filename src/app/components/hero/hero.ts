import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {

  @Input() category = '';

  @Input() title = '';

  @Input() description = '';

  @Input() buttonText = '';

  @Input() image = '';

}