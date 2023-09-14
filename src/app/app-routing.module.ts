import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProxJogosComponent } from './components/equipe/prox-jogos/prox-jogos.component';
import { EstatisticasComponent } from './components/equipe/estatisticas/estatisticas.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'proxJogos', component:ProxJogosComponent},
  {path:'estatisticas', component:EstatisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
