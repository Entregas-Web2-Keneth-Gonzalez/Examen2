import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import ('./Paginas/character-list-component/character-list-component.module').then((m) => m.CharacterListComponentModule)
    }
];
