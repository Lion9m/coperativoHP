import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome!: string;
  email!:string;
  mensagem!:string;

  post(){
    let formData = new FormData();
    formData.append('nome', this.nome);
    formData.append('email', this.email);
    formData.append('mensagem', this.mensagem);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  }
}
