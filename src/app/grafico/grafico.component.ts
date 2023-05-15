import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

class Aparelho
{
  constructor(
    public name: string,
    public time: number,
    public energy: number,
    public voltage: number,
    public average: number,
    public energySaving: number
  ){
  }
}

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
aparelho: Aparelho[] = [];
model = new Aparelho("", 0, 0, 0, 0, 0);
private chartInstance: Chart | undefined;

  addAparelho(){
    this.aparelho.push(this.model);
    this.resetModel();
    this.updateChart();
  }

  calculateEnergyConsumption(): number {
    const totalEnergy = (this.model.time * this.model.energy)/1000;
    return Number(totalEnergy.toFixed(2));
  }

  calculatePrice(): number {
    const energyConsumption = this.calculateEnergyConsumption();
    const price = energyConsumption * 0.65313;
    return Number(price.toFixed(2));
  }
  
  resetModel(){
    this.model = new Aparelho("", 0, 0, 0, 0, 0);
  }

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  ngAfterViewInit() {
    this.updateChart();
  }
  
  updateChart() {
    const chartCanvas = this.chartCanvas.nativeElement.getContext('2d');
  
    const data = {
      labels: this.aparelho.map(aparelho => aparelho.name),
      datasets: [
        {
          label: 'Energia Consumida',
          data: this.aparelho.map(aparelho => aparelho.energy),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Tempo de Consumo',
          data: this.aparelho.map(aparelho => aparelho.time),
          backgroundColor: 'rgba(192, 75, 192, 0.2)',
          borderColor: 'rgba(192, 75, 192, 1)',
          borderWidth: 1
        }
      ]
    };
    if (this.chartInstance) {
      // Se o gráfico já foi criado, atualize os dados
      this.chartInstance.data = data;
      this.chartInstance.update();
    } else {
      // Se o gráfico ainda não foi criado, crie-o
      this.chartInstance = new Chart(chartCanvas, {
        type: 'bar',
        data: data,
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
}
  