import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponentComponent } from './character-list-component/character-list-component.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListComponentRoutingModule { }
