import { Routes } from '@angular/router';
import { CaneList } from './cane-list/cane-list';
import { NewCane } from './new-cane/new-cane';

export const routes: Routes = [
    {path : 'cani', component: CaneList},
    {path : 'newCane', component: NewCane}
];
