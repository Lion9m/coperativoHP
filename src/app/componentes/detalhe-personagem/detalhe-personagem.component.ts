import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-personagem',
  templateUrl: './detalhe-personagem.component.html',
  styleUrls: ['./detalhe-personagem.component.css']
})
export class DetalhePersonagemComponent implements OnInit {
  
  personagem: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const item = params['item'];
      if (item) {
        this.personagem = JSON.parse(item);
      }
    });
  }
}