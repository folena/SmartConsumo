import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css']
})
export class AparelhosComponent {
  aparelhos = [
    {name: 'Batedeira Philco', time: '10 Minutos', energy: '500Kw'},
    {name: 'Televisão Samsung', time: '2 Horas', energy:'3000Kw'},
    {name: 'Computador', time: '4 Horas', energy: '5000Kw'}
  ]
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  getAparelhoMaisEnergetico(): string {
    let aparelhoMaisEnergetico = '';
    let maiorEnergia = 0;
  
    for (const aparelho of this.aparelhos) {
      const energia = parseFloat(aparelho.energy);
      if (energia > maiorEnergia) {
        maiorEnergia = energia;
        aparelhoMaisEnergetico = aparelho.name;
      }
    }
  
    return aparelhoMaisEnergetico;
  }  

  ngAfterViewInit() {
    const chartCanvas = this.chartCanvas.nativeElement.getContext('2d');
  
    const labels = this.aparelhos.map(aparelho => aparelho.name);
    const data = this.aparelhos.map(aparelho => parseFloat(aparelho.energy));
  
    new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Energia Consumida',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
}
