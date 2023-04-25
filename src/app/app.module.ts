import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficoComponent } from './grafico/grafico.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { AparelhosComponent } from './aparelhos/aparelhos.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
    LoginComponent,
    TelaInicioComponent,
    AparelhosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
