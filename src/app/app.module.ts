import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { HeroService } from './hero.service';
import { HeroesMsgComponent } from './messages/heroes-msg/heroes-msg.component';
import { HeroesMessageService } from './heroes-message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    HeroesMsgComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [HeroService, HeroesMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
