import { Component, OnInit } from '@angular/core';
import { Games } from '../model/game.model';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../service/game.service';
import { Play } from '../model/play.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  GameList:Games[];
  PlayList:Play[];
  amount=500;
  constructor(private http: HttpClient, private gameserv: GameService) { }

  ngOnInit() {
    this.gameserv.showGameList().subscribe(
      data => this.GameList = data
    )

  }

}
