import { Component } from '@angular/core';
import axios from 'axios';

interface Personagem{
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

  listaPersonagens$: Personagem[]=[];

  async getPersonagens(){

    axios.get<Personagem[]>('https://hp-api.onrender.com/api/characters')
    .then((response)=>{
      this.listaPersonagens$ = response.data;
    }).catch((error)=>{
      console.log(error)
    })
  }

  constructor(){
    this.getPersonagens()
  }

}
