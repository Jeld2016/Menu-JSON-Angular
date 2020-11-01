import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatBadgeModule} from '@angular/material/badge';
import { MenuComponent } from './menu/menu.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
declarations: [
AppComponent,
MenuComponent
],

imports: [
BrowserModule,
MatToolbarModule,
MatCardModule,
BrowserAnimationsModule,
MatSliderModule,
HttpClientModule,
AppRoutingModule,
BrowserAnimationsModule,
MatToolbarModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatBadgeModule,
MatExpansionModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }