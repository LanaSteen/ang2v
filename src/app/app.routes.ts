import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},


    {path: "home", component:HomeComponent},
    {path: "main", component:MainComponent},
    {path: "details/:id", component:DetailsComponent},

    {path: "**", component: ErrorComponent}

];



//widlcard