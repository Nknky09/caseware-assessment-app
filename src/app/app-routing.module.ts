import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ReactHostComponent } from './react-host/react-host.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },

  { path: 'products/:id', component: ProductDetailComponent },

  { path: 'react', component: ReactHostComponent },

  { path: '', redirectTo: '/products', pathMatch: 'full' },

  { path: '**', redirectTo: '/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
