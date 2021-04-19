import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { PreHeaderComponent } from './components/pre-header/pre-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemListComponent } from './views/item-list/item-list.component';
import { ItemListDetailComponent } from './components/item-list-detail/item-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    ItemListComponent,
    ItemListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
