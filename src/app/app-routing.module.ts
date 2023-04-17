import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './componentes/contato/contato.component';
import { Home1Component } from './componentes/home1/home1.component';
import { InfoComponent } from './componentes/info/info.component';
import { PersonagensComponent } from './componentes/personagens/personagens.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    component: ContatoComponent},
  {
    path: 'home',
    component: Home1Component
  },
  {
    path: 'info',
    component:InfoComponent
  },
  {
    path: 'personagens',
    component: PersonagensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
