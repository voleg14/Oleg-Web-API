import { SearchService } from './../Service/search-service.service';
import { Component,OnInit } from "@angular/core";


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'

})

export class SearchComponent implements OnInit  {
    showtable = false;
    wantedGames: any[];
   
txtGameName; txtPlayer1; txtPlayer2; txtWhoWon;
    constructor(private service: SearchService){ }
    
    ngOnInit() {
        
    }

    SearchGames(){
        this.wantedGames = [];
        this.showtable = true;
       this.wantedGames = this.service.wantedGames;
       this.service.GetWantedGames (this.txtGameName,this.txtPlayer1,this.txtPlayer2,this.txtWhoWon );
    console.log("wantedGames :" + this.wantedGames)
    }
}