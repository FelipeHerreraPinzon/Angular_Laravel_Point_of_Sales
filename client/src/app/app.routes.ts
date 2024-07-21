import { Routes } from '@angular/router';
import { IndexComponent} from './categories/index/index.component';
import { CreateComponent} from './categories/create/create.component';


export const routes: Routes = [
  { path: 'categorias', component: IndexComponent },
  { path: 'crear', component: CreateComponent },
 
];

