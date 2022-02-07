import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/loginc.component';
import { AuthGuard } from './security/auth.guard';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'venta', component: VentaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
