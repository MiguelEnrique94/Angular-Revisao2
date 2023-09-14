import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProxJogosComponent } from './components/equipe/prox-jogos/prox-jogos.component';
import { EstatisticasComponent } from './components/equipe/estatisticas/estatisticas.component';
import { ProdutosComponent } from './components/loja/produtos/produtos.component';
import { IngressosComponent } from './components/loja/ingressos/ingressos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'proxJogos', component:ProxJogosComponent},
  {path:'estatisticas', component:EstatisticasComponent},
  {path: 'loja', component:ProdutosComponent},
  {path: 'ingressos', component:IngressosComponent},
  {path: 'noticias', component:NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
