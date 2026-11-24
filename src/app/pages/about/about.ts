import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { InfoBox } from '../../components/info-box/info-box';

@Component({
  imports: [Card, InfoBox],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}