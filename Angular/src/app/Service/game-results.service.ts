import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class GameResultService {
private url = 'http://localhost:50168/API/GamesResults/'

constructor( private http: Http) {}

GetGameResults() {
    return this.http.get(this.url);
}

PostGameResult(game: any){
    let addGame = {
        Game_Name: game['GameName'],
        Player1: game['Player1'],
        Player2: game['Player2'],
        Who_Won_: game['WhoWon']
    }
    return  this.http.post(this.url, addGame);
}

PutGameResult(id: number, game: any){
    let updateGame = {
        Game_Name: game['GameName'],
        Player1: game['Player1'],
        Player2: game['Player2'],
        Who_Won_: game['WhoWon']
    }
return this.http.put(this.url + id, updateGame);

}

DeleteGameResult(id: number){
    console.log(this.url + id);
   return this.http.delete(this.url + id);
   
}

GetBySearch( searchedURL : string){
    return this.http.get(searchedURL);
    }
}