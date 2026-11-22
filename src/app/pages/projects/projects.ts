import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects implements OnInit {

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef)

  temperatura: number | null = null;
  vento: number | null = null;
  nebulosidade: number | null = null;

  carregando = true;
  erro = false;

  ngOnInit() {
    this.http.get<any>(
      'https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,wind_speed_10m,cloud_cover&timezone=America%2FSao_Paulo'
    ).subscribe({
      next: (dados) => {
        this.temperatura = dados.current.temperature_2m;
        this.vento = dados.current.wind_speed_10m;
        this.nebulosidade = dados.current.cloud_cover;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = true;
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }
}