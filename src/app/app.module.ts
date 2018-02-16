import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';


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
import { VillainDetailComponent } from './villain/villain-detail/villain-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DataStorageService } from './shared/services/data-storage-service.service';
import { AuthService } from './auth/services/auth.service';

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
    VillainDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule
  ],
  providers: [HeroService, HeroesMessageService, VillainService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
