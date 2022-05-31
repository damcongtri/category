import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DetailPRDComponent } from './content/detail-prd/detail-prd.component';
import { HomeComponent } from './content/home/home.component';
import { ProductComponent } from './content/product/product.component';
import { SidebarComponent } from './detail/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'detail/:id', component: DetailPRDComponent },
  { path: 'category/:id', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
