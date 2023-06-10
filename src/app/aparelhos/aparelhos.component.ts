import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css']
})
export class AparelhosComponent {
  aparelhos = [
    {name: 'Aparelho de Blu-ray', time: '2 Horas',voltagem:'127', corrente: '0.8', 
    potencia: '100',energy: '0.19Kw', valor: '0.12', semana: '0.84', mes: '3.60'},
    {name: 'Computador', time: '240 Minutos', energy: '0.62Kw', voltagem: '127', corrente: '4.88', 
    potencia: 620,valor: '0.4', semana: '2.80', mes: '12'},
    {name: 'Chuveiro Elétrico', time: '32 Minutos', energy: '0.17Kw', voltagem: '220', corrente:'0.96',
     potencia: '122', valor: '0.33 R$', semana: '2.31 R$', mes: '9.90'},
    {name: 'Aquecedor de ambiente', time: '8 horas', energy:'0.84Kw', valor: '1.10', semana: '7.70', mes: '33.00'},
    {name: 'Ar-Condicionado', time: '8 Horas', energy: '0.17Kw', voltage: '220', corrente: '1.41', 
  potencia: '179', valor: '1.62', semana: '11.34', mes: '48.6'}
  ]
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  constructor(private router: Router) {}
  
  redirectToAparelhoDetail(aparelho: any) {
    this.router.navigate(['/aparelhos', aparelho.name], { state: { aparelho } });
  }
  
  
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
            borderWidth: 0.5
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
