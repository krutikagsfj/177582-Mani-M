import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../model/game.model';
import { Play } from '../model/play.model'


@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl: string = 'http://localhost:3000/GameList';
  
  constructor(private http: HttpClient) { }

  showGameList() {
    return this.http.get<Games[]>(this.baseUrl)
  }

  addGame(pl:Play){
    return this.http.post<Play>(this.baseUrl, pl)

  }
  
}

