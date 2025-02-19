import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';

const routes: Routes = [
  {path:"inicio" , component: InicioComponent},
  {path:"Login" , component: LoginComponent},
  {path:"restrito" ,component: RestritoComponent},
  {path:"" , redirectTo:"/inicio" ,pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
