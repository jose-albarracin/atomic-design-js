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
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
