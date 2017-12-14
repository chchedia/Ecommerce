import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TrierPipe } from './trier.pipe';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Application } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule }    from '@angular/forms';


@NgModule({
  declarations: [
    Application,
    MenuComponent,
    ProductComponent,
    TrierPipe,
    HomeComponent,
    BasketComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [
    ProductService,
    CustomerService,
    { provide: "title", useValue: "Zenika" },
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [Application]
})
export class AppModule { }
