import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { RouteGameModule } from './route-game/route-game.module'


import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
// import { GameListComponent } from './game-city/game-city.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent
    // GameListComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouteGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
