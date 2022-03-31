import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterState } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent},
  { path: '**', redirectTo: ''}
  ];

  @NgModule({
    imports: [
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
    )
    ],
    exports: [
    RouterModule
    ]
    })
    export class AppRoutingModule { }
