import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { ProdactListingComponent} from './prodact-listing/prodact-listing.component';
import { ProdactDetailComponent } from './prodact-detail/prodact-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = 
[
  {
    path: 'products', component: ProductsComponent,
    children:[
      { path: '', component: ProdactListingComponent},
      { path: ':productId', component: ProdactDetailComponent} 
    ]
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProdactDetailComponent,
    ProdactListingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProdutsModule { }
