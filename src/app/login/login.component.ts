import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
usuario?: string;
senha?: string;
mensagemErro?: string;

constructor(private router: Router){}

validarLogin(): void{
  if(this.usuario === 'folena' && this.senha === 'upx'){
    this.router.navigate(['/telaInicio']);
  }else{
    this.mensagemErro = `Usuário ${this.usuario} ou senha inválida!`;
  }
}
}
