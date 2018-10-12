import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    RestaurantComponent,
    MenuItemComponent,
    HeroListComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
