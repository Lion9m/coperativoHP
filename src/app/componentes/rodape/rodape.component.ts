import { Component, Input } from '@angular/core';
import { Personagem, PersonagensComponent } from '../personagens/personagens.component';


@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  @Input() public listaG$: Personagem[] = [];
  @Input() public listaS$: Personagem[] = [];
  @Input() public listaR$: Personagem[] = [];
  @Input() public listaH$: Personagem[] = [];
      
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
