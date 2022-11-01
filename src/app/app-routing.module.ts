import { ProdutsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'products', pathMatch:'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProdutsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
