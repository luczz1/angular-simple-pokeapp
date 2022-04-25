import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpokeComponent } from './allpoke/allpoke.component';
import { PokePanelComponent } from './poke-panel/poke-panel.component';
import { ModalComponent } from './allpoke/modal/modal.component';

const routes: Routes = [
  {path: '', redirectTo: '/pokepanel', pathMatch: 'full'},
  {path: 'pokepanel', component: PokePanelComponent},
  {path: 'allpoke', component: AllpokeComponent, children:[
    {path: 'modal/:name', component: ModalComponent, pathMatch: 'full'}
  ]},

  {path: '**', component: AllpokeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
