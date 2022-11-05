import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShopOnlineComponent } from './shop-online/shop-online.component';
import { CakeDesignerComponent } from './cake-designer/cake-designer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.model';
import { FavouritesComponent } from './favourites/favourites.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { ProductsComponent } from './main-page/products/products.component';
import { FeedbackComponent } from './main-page/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ShopOnlineComponent,
    CakeDesignerComponent,
    PageNotFoundComponent,
    FavouritesComponent,
    CartComponent,
    ContactUsComponent,
    AboutMeComponent,
    ProductsComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
