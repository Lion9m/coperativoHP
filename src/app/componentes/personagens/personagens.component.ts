import { Component, EventEmitter, Output } from '@angular/core';
import axios from 'axios';

export interface Personagem{
  id:string;
  name:string;
  alternative_names:[];
  species:string;
  gender:string;
  house:string;
  dateOalternate_actorsfBirth:string;
  yearOfBirth:number;
  wizard:boolean;
  ancestry:string;
  eyeColour:string;
  hairColour:string;
  wand:[];
  patronus:string;
  hogwartsStudent:boolean;
  hogwartsStaff:boolean;
  actor:string;
  alternate_actors:[];
  alive:boolean;
  image:string;
}


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent {

  public listaG$: Personagem[]=[];
  public listaS$: Personagem[]=[];
  public listaR$: Personagem[]=[];
  public listaH$: Personagem[]=[];

  @Output() personagensCarregadosG = new EventEmitter<Personagem[]>();
  @Output() personagensCarregadosS = new EventEmitter<Personagem[]>();
  @Output() personagensCarregadosR = new EventEmitter<Personagem[]>();
  @Output() personagensCarregadosH = new EventEmitter<Personagem[]>();

  async getPersonagens(){

    axios.get<Personagem[]>('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response)=>{
      this.listaG$ = response.data;
      this.personagensCarregadosG.emit(response.data);
    }).catch((error)=>{
      console.log(error)
    })

    axios.get<Personagem[]>('https://hp-api.onrender.com/api/characters/house/slytherin')
    .then((response)=>{
      this.listaS$ = response.data;
      this.personagensCarregadosS.emit(response.data);
    }).catch((error)=>{
      console.log(error)
    })

    axios.get<Personagem[]>('https://hp-api.onrender.com/api/characters/house/ravenclaw')
    .then((response)=>{
      this.listaR$ = response.data;
      this.personagensCarregadosR.emit(response.data);
    }).catch((error)=>{
      console.log(error)
    })

    axios.get<Personagem[]>('https://hp-api.onrender.com/api/characters/house/hufflepuff')
    .then((response)=>{
      this.listaH$ = response.data;
      this.personagensCarregadosH.emit(response.data);
    }).catch((error)=>{
      console.log(error)
    })




  }

  constructor(){
    this.getPersonagens()
  }

}
