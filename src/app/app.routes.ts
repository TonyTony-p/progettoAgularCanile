
import { Routes } from '@angular/router';
import { CaneList } from './cane-list/cane-list';
import { NewCane } from './new-cane/new-cane';

export const routes: Routes = [
<<<<<<< HEAD
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
=======

    { path: '', redirectTo: 'cani', pathMatch: 'full' },
    {path : 'cani', component: CaneList},
    {path : 'newCane', component: NewCane}
];
>>>>>>> b970692dd9167b6b113037f8ef20992e1882a2bd
