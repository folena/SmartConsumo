import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-aparelho-detalhe',
  templateUrl: './aparelho-detalhe.component.html',
  styleUrls: ['./aparelho-detalhe.component.css']
})
export class AparelhoDetalheComponent implements OnInit, AfterViewInit {
  aparelho: any;
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.aparelho = history.state.aparelho;
  }
  ngAfterViewInit() {
    const chartCanvas = this.chartCanvas.nativeElement.getContext('2d');
  
    const labels = ['Valor', 'Valor em uma Semana', 'Valor em um mês'];
    const data = [parseFloat(this.aparelho.energy), parseFloat(this.aparelho.semana), parseFloat(this.aparelho.mes)];
    const colors = ['rgba(75, 192, 192, 0.2)', 'rgba(0, 192, 153, 0.4)', 'rgba(0, 192, 153, 0.4)' ];
  
    const datasets = labels.map((label, index) => {
      return {
        label: label,
        data: [data[index]],
        backgroundColor: [colors[index]],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0.5
      };
    });
  
    new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: datasets
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value: any) {
                if (typeof value === 'number' && Number.isInteger(value)) {
                  return value;
                }
                return '';
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              generateLabels: function (chart: any) {
                const labels = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                labels.forEach((label: any, index: number) => {
                  label.fillStyle = colors[index];
                  
                });
                return labels;
              },
              font: {
                size: 14 // Aumente o tamanho das legendas
              }
            }
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context: any) {
                const label = context.dataset.label;
                const value = context.parsed.y;
                return label + ': R$' + value.toLocaleString();
              }
            },
            titleFont: {
              size: 20
            },
            bodyFont: {
              size: 20
            }
          }
        }
      }
    });
  }
  
}  