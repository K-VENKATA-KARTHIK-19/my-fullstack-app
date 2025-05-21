import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { ProductsComponent } from './components/pages/products/products.component';

import { ReportsComponent } from './components/pages/reports/reports.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard],
    children:[ { path: 'orders', component: OrdersComponent , canActivate:[AuthGuard]},
  { path: 'products', component: ProductsComponent , canActivate:[AuthGuard]}]
  },
  
  // Default route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
