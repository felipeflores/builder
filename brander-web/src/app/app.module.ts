import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localePTBR from '@angular/common/locales/pt';
registerLocaleData(localePTBR);


//import { ROUTES } from './app.routes'



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
