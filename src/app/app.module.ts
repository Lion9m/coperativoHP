import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Bibliotecas
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { InfoComponent } from './componentes/info/info.component';
import { Home1Component } from './componentes/home1/home1.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    ContatoComponent,
    InfoComponent,
    Home1Component,
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [
    PersonagensComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
