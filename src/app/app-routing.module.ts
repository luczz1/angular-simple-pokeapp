import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpokeComponent } from './allpoke/allpoke.component';
import { PokePanelComponent } from './poke-panel/poke-panel.component';
import { ModalComponent } from './allpoke/modal/modal.component';

const routes: Routes = [
  {path: '', component: PokePanelComponent},
  {path: 'pokepanel', component: PokePanelComponent},
  {path: 'allpoke', component: AllpokeComponent},
  {path: 'modal/:id', component: ModalComponent},
  {path: '**', component: AllpokeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
