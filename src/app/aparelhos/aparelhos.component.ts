import { Component } from '@angular/core';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css']
})
export class AparelhosComponent {
  aparelhos = [
    {name: 'Batedeira Philco', time: '10 Minutos', energy: '500Kw'},
    {name: 'Televisão Samsung', time: '2 Horas', energy:'3000Kw'}
  ]
}
