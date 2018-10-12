import { Injectable } from '@angular/core';
import { GameResultService } from './game-results.service';


@Injectable()
export class SearchService {
    gameResults: any[];
    wantedGames: any[];
    constructor(private service: GameResultService){
      this.service.GetGameResults()
      .subscribe(Response =>{
        this.gameResults = Response.json();
        console.log(this.gameResults);
      });

      this.wantedGames = [];

    }
    
   GetWantedGames(gamename? ,player1? , player2? , whoWon? ){
     //this.wantedGames = [];
    console.log(gamename);
    //this.wantedGames.push
    let url = "http://localhost:50168/API/GamesResults/Search?" + 
    ((gamename != "")&&(gamename != null) ? "gameName=" + gamename + "&":"") + 
    ((player1 != "")&&(player1 != null) ? "player1Name=" + player1 + "&":"") +
    ((player2 != "")&&(player2 != null) ? "player2Name=" + player2 + "&":"") +
    ((whoWon != "")&&(whoWon != null) ? "whoWon=" + whoWon + "&":"");

     this.service.GetBySearch(url).subscribe(Response => {
      let result = Response.json();
      for(let i = 0; i < result.length; i++)
      {
        this.wantedGames.push( result[i])
      }
      
       console.log(this.wantedGames);
     });
     //return this.wantedGames;
    
        }
  }

