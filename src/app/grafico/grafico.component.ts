import { Component} from '@angular/core';

class Aparelho
{
  constructor(
    public name: string,
    public time: number,
    public energy: number
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
model = new Aparelho("", 0, 0);

  addAparelho(){
    this.aparelho.push(this.model);
    this.resetModel();
  }

  resetModel(){
    this.model = new Aparelho("", 0, 0);
  }

}