import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { HeroesMsgComponent } from './messages/heroes-msg/heroes-msg.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VillainComponent } from './villain/villain.component';
import { HeroService } from './heroes/services/hero.service';
import { HeroesMessageService } from './messages/heroes-msg/services/heroes-message.service';
import { VillainService } from './villain/services/villain.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VillainDetailComponent } from './villain/villain-detail/villain-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
    HeroesMsgComponent,
    HeaderComponent,
    MainComponent,
    DashboardComponent,
    VillainComponent,
    LoginComponent,
    RegisterComponent,
    VillainDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [HeroService, HeroesMessageService, VillainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
