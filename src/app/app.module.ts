import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/shared/sidebar/sidebar.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { ItemsSideComponent } from './pages/shared/sidebar/items-side/items-side.component';
import { ItemsNavComponent } from './pages/shared/navbar/items-nav/items-nav.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, SidebarComponent, NavbarComponent, ItemsSideComponent, ItemsNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
