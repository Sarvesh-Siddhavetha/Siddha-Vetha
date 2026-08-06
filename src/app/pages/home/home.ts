import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
