
import { Routes } from '@angular/router';
import { CaneList } from './cane-list/cane-list';
import { NewCane } from './new-cane/new-cane';

export const routes: Routes = [
  {
    path: 'cani',
    component: CaneList
  },
  {
    path: 'nuovo-cane',
    component: NewCane
  },
  { path: 'modifica-cane/:id',
    component: NewCane 
},
  {
    path: '',
    redirectTo: '/cani',
    pathMatch: 'full'
  }
];
