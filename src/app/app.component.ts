import { Component } from '@angular/core';
import { Personagem, PersonagensComponent } from './componentes/personagens/personagens.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coperativoHP';

  public listaG$: Personagem[]=[];
  public listaS$: Personagem[]=[];
  public listaR$: Personagem[]=[];
  public listaH$: Personagem[]=[];
  
  constructor(private personagensComponent: PersonagensComponent) {}

  ngOnInit() {
  this.personagensComponent.personagensCarregadosG.subscribe(personagens => {
    this.listaG$ = personagens.filter(p => p.house === 'Gryffindor').slice(0, 4);
    });
  this.personagensComponent.personagensCarregadosS.subscribe(personagens => {
    this.listaS$ = personagens.filter(p => p.house === 'Slytherin').slice(0, 4);
    });
  this.personagensComponent.personagensCarregadosR.subscribe(personagens => {
    this.listaR$ = personagens.filter(p => p.house === 'Ravenclaw').slice(0, 4);
    });
  this.personagensComponent.personagensCarregadosH.subscribe(personagens => {
    this.listaH$ = personagens.filter(p => p.house === 'Hufflepuff').slice(0, 4);
    });
  }
}
