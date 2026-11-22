import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  imports: [Card],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}