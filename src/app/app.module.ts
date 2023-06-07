import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './atoms/menu-item/menu-item.component';
import { MenuComponent } from './molecules/menu/menu.component';
import { HeaderComponent } from './organisms/header/header.component';
import { ItemsGridComponent } from './organisms/items-grid/items-grid.component';
import { TShirtComponent } from './pages/t-shirt/t-shirt.component';
import { LayoutComponent } from './templates/layout/layout.component';
import { PantsComponent } from './pages/pants/pants.component';
import { ProductCardComponent } from './molecules/product-card/product-card.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { TopBarComponent } from './atoms/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionPrincipalComponent } from './molecules/section-principal/section-principal.component';
import { BtnPrincipalComponent } from './atoms/btn-principal/btn-principal.component';
import { DefaultComponent } from './templates/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    MenuComponent,
    HeaderComponent,
    ItemsGridComponent,
    TShirtComponent,
    LayoutComponent,
    PantsComponent,
    ProductCardComponent,
    LogoComponent,
    TopBarComponent,
    HomeComponent,
    SectionPrincipalComponent,
    BtnPrincipalComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
