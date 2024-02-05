import { Routes } from '@angular/router';
import { ListEmployeComponent } from './pages/list-employe/list-employe.component';
import { LoginComponent } from './pages/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MasterComponent } from './layouts/master/master.component';
import { AddEmployeComponent } from './pages/add-employe/add-employe.component';
import { DetailEmployeComponent } from './pages/detail-employe/detail-employe.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [],
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    canActivate: [],
    children: [
      { path: 'listemploye', component: ListEmployeComponent },
      { path: 'addemploye', component: AddEmployeComponent },
      { path: 'detailemploye', component: DetailEmployeComponent },
    ],
  },
];
