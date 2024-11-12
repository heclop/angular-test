import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroModeule } from './heroes/hero.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModeule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
