import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '', component: Login, pathMatch: 'full'

    },

    {
        path: 'register', component: Register,
    },

    {
        path: 'home', component: Home,
    }
];
