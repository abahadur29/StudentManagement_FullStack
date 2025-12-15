import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { StudentList } from './components/student-list/student-list';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'students', component: StudentList },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];