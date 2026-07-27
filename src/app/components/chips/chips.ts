import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips',
  standalone: true,
  templateUrl: './chips.html',
  styleUrl: './chips.css'
})
export class ChipsComponent {

  @Input() chips: string[] = [];

}