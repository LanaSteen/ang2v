import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
                                   /////////////////////////    eagger Loading
    // {path: "", redirectTo: "home", pathMatch: "full"},


    // {path: "home", component:HomeComponent},
    // {path: "main", component:MainComponent},
    // {path: "details/:id", component:DetailsComponent},
    // {path: "users", component:UsersComponent},

    // {path: "**", component: ErrorComponent}
                                 
    
                                    /////////////////////////    lazy Loading

    {path: "", redirectTo: "home", pathMatch: "full"},
    {
        path: "home",
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: "main",
        loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
    },
    {
        path: "details/:id",
        loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
    },
    { 
        path: "users",
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
    },



    {path: "**", component: ErrorComponent}



];



//widlcard