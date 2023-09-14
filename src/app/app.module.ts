import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProxJogosComponent } from './components/equipe/prox-jogos/prox-jogos.component';
import { EstatisticasComponent } from './components/equipe/estatisticas/estatisticas.component';
import { ProdutosComponent } from './components/loja/produtos/produtos.component';
import { IngressosComponent } from './components/loja/ingressos/ingressos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProxJogosComponent,
    EstatisticasComponent,
    ProdutosComponent,
    IngressosComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
