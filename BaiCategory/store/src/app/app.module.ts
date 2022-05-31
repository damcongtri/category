import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './detail/header/header.component';
import { SidebarComponent } from './detail/sidebar/sidebar.component';
import { HomeComponent } from './content/home/home.component';
import { ProductComponent } from './content/product/product.component';
import { DetailPRDComponent } from './content/detail-prd/detail-prd.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    DetailPRDComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
