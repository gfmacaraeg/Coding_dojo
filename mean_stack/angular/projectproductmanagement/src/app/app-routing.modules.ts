import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {HomeComponent} from './home/home.component'
import {ProductsComponent} from './products/products.component'
import {CreateComponent} from './create/create.component'
const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'create', component: CreateComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }