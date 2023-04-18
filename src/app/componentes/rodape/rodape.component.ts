import { Component, Input } from '@angular/core';
import { Personagem } from '../personagens/personagens.component';


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
  
}
