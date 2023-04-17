import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { ContatoComponent } from './contato/contato.component';
import { InfoComponent } from './info/info.component';
import { Home1Component } from './home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonagensComponent,
    ContatoComponent,
    InfoComponent,
    Home1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
