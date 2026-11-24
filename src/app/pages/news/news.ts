import { Component } from '@angular/core';
import { NewsCard } from '../../components/news-card/news-card';

@Component({
  imports: [NewsCard],
  selector: 'app-news',
  styleUrl: './news.css',
  templateUrl: './news.html',
})
export class News {}
