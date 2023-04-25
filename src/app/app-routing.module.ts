import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';
import { LoginComponent } from './login/login.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { AparelhosComponent } from './aparelhos/aparelhos.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'grafico', component:GraficoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'telaInicio', component:TelaInicioComponent},
  {path: 'aparelhos', component:AparelhosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
