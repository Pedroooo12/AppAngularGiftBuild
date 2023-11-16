import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiftsModule } from './gifts/gifts.module';
import { SharedModule } from './shared/shared.module';

//modulo http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GiftsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }