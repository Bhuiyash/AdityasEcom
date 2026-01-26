import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { CartComponent } from './cart/cart';
import { CheckoutComponent } from './checkout/checkout';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'about', component: AboutComponent },
];
