import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() data: string = '';
}