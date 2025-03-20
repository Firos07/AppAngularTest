import { Routes } from '@angular/router';
import { MainTableComponent } from './main-table/main-table.component';
import { CreateItemComponent } from './create-item/create-item.component';

export const routes: Routes = [
    {path: '', component: MainTableComponent},
    {path: 'create', component: CreateItemComponent}
];
