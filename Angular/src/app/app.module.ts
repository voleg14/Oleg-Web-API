import { NavigationComponent } from './Navigation/navigation.component';
import { SearchComponent } from './Search/search.component';
import {  GameResultService } from './Service/game-results.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SearchService } from './Service/search-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SearchComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: NavigationComponent},
      {path: 'View',component: ViewComponent},
      {path: 'Search', component: SearchComponent},
      
    ])
  ],
  providers: [
    GameResultService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
   