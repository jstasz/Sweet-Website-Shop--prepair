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
import { GalleryComponent } from './main-page/gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { TypeComponent } from './cake-designer/type/type.component';
import { SizeComponent } from './cake-designer/size/size.component';
import { FlavourComponent } from './cake-designer/flavour/flavour.component';
import { DateComponent } from './cake-designer/date/date.component';
import { ColorComponent } from './cake-designer/color/color.component';
import { DetailsComponent } from './cake-designer/details/details.tcomponent';
import { ShortenPipe } from './shared/shorten.pipe';
import { SpacePipe } from './header/nav-links.pipe';
import { ShopProductsComponent } from './shop-online/shop-products/shop-products.component';
import { ShopCategoriesComponent } from './shop-online/shop-categories/shop-categories.component';
import { FormsModule } from '@angular/forms';

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
    GalleryComponent,
    FooterComponent,
    TypeComponent,
    SizeComponent,
    FlavourComponent,
    DateComponent,
    DetailsComponent,
    ColorComponent,
    ShortenPipe,
    SpacePipe,
    ShopProductsComponent,
    ShopCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
