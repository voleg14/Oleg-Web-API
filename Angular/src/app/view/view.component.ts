import { GameResultService } from './../Service/game-results.service';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  selectedRow: number;
  gameResults: any[];
  txtId; txtGameName;  txtPlayer1;  txtPLayer2; txtHowWon;
   
  constructor(private service: GameResultService) { }

  ngOnInit() {
   this.service.GetGameResults()
   .subscribe(Response => {
     this.gameResults = Response.json();
     console.log(Response.json());
   });
   }

   rowselected($event){
     this.selectedRow = $event.path[1].rowIndex;
    
     this.txtId = $event.path[1].cells[0].textContent;
     this.txtGameName = $event.path[1].cells[1].textContent;
     this.txtPlayer1 = $event.path[1].cells[2].textContent;
     this.txtPLayer2 = $event.path[1].cells[3].textContent;
     this.txtHowWon = $event.path[1].cells[4].textContent;
   }

   PostGame(){
    let addGame = {
      GameName: this.txtGameName,
      Player1: this.txtPlayer1,
      Player2: this.txtPLayer2,
      WhoWon: this.txtHowWon
    }
    this.service.PostGameResult(addGame).subscribe(Response =>{
      console.log(Response.json());
      this.ngOnInit();
    })

   }
   PutGame(){
    let updateGame = {
      GameName: this.txtGameName,
      Player1: this.txtPlayer1,
      Player2: this.txtPLayer2,
      WhoWon: this.txtHowWon}
      this.service.PutGameResult(this.txtId, updateGame ).subscribe(Response =>{
        console.log(Response.json());
        this.ngOnInit();
      })
   }

   deleteGame(){
     if(this.txtId != null){
       this.service.DeleteGameResult(this.txtId)
        .subscribe(response =>{
        console.log(response.json());
    });
       console.log(this.txtId);
       console.log("DELETED!")
       this.ngOnInit();
     }
   }
  }


