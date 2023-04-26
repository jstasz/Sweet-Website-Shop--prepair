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
import { FooterComponent } from './footer/footer.component';
import { TypeComponent } from './cake-designer/type/type.component';
import { SizeComponent } from './cake-designer/size/size.component';
import { FlavourComponent } from './cake-designer/flavour/flavour.component';
import { ColorComponent } from './cake-designer/color/color.component';
import { DetailsComponent } from './cake-designer/details/details.tcomponent';
import { ShortenPipe } from './shared/shorten.pipe';
import { SpacePipe } from './header/nav-links.pipe';
import { ShopProductsComponent } from './shop-online/shop-products/shop-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopOnlineService } from './shop-online/shop-online.servis';
import { CartService } from './cart/cart.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SummaryComponent } from './cake-designer/summary/summary.component';
import { CreamComponent } from './cake-designer/cream/cream.component';
import { MenuComponent } from './header/menu/menu.component';
import { HeaderService } from './header/header.service';
import { FavouritesService } from './favourites/favourites.service';
import { AlertComponent } from './alert/alert.component';
import { ShopSettingsComponent } from './shop-online/shop-settings/shop-settings.component';
import { AlertService } from './alert/alert.service';
import { LocalStorageService } from './shared/local-storage.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';

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
    FooterComponent,
    TypeComponent,
    SizeComponent,
    FlavourComponent,
    DetailsComponent,
    ColorComponent,
    ShortenPipe,
    SpacePipe,
    ShopProductsComponent,
    SummaryComponent,
    CreamComponent,
    MenuComponent,
    AlertComponent,
    ShopSettingsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    ShopOnlineService, 
    CartService, 
    HeaderService, 
    FavouritesService, 
    AlertService, 
    LocalStorageService, 
    AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
