function GetGameByID() {
    var gameId = document.getElementById("txtGameId").value;
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50168/API/GamesResults/' + gameId;

    req.open('Get', url);
    req.onload = function () {
        document.getElementById("putForm").hidden = false;
        var item = JSON.parse(req.response)
        console.log(req.response)

        document.getElementById("txtGameName").value = item.Game_Name;
        document.getElementById("txtPlayer1").value = item.Player1;
        document.getElementById("txtPlayer2").value = item.Player2;

        if (item.Player1 == item.Who_Won_)
            document.getElementById("gridRadios1").checked = true
        else if (item.Player2 == item.Who_Won_)
            document.getElementById("gridRadios2").checked = true
        else
            document.getElementById("gridRadios3").checked = true
    }
    req.onerror = function () {
        alert('error')
    }
    req.send();
}

function GetAllGames() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50168/API/GamesResults/'

    req.open('Get', url);
    req.onload = function () {
        var list = JSON.parse(req.response)
        console.log(req.response)

        for (var i = 0; i < list.length; i++) {
            var item = list[i];

            for (var filed in item) {
                document.getElementById("resolt").innerHTML += filed + ": " + item[filed] + ", ";
            }
            document.getElementById("resolt").innerHTML += "<br>";
        }
    }

    req.onerror = function () {
        alert('error')
    }

    req.send();
}

function PutGame() {
    var req = new XMLHttpRequest();
    var gameID = document.getElementById("txtGameId").value;
    var url = 'http://localhost:50168/API/GamesResults/' + gameID;

    

    //var item = '{"ID":' + gameID + ',"Game_Name":"' + document.getElementById("txtGameName").value + '","Player1":"' +
    //    document.getElementById("txtPlayer1").value + '","Player2":"' + document.getElementById("txtPlayer2").value + '":"Who_Won_":"' + WhoWon() + '"}';

    //var item = {
    //    ID: gameID,
    //    Game_Name: document.getElementById("txtGameName").value,
    //    Player1: document.getElementById("txtPlayer1").value,
    //    Player2: document.getElementById("txtPlayer2").value,
    //    Who_Won_: WhoWon()
    //}

    //var item = {
    //    "Game_Name": + '"' + document.getElementById("txtGameName").value + '"',
    //    "Player1": + '"' + document.getElementById("txtPlayer1").value + '"' ,
    //    "Player2": + '"' + document.getElementById("txtPlayer2").value + '"',
    //    "Who_Won_": + '"' + WhoWon() + '"' }

    req.open('PUT', url);
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        Console.log('Updated');
        document.getElementById("resolt").innerHTML = item;
    }
    req.onerror = function () {
        alert("error")
    }
    req.send('{"ID": ' + gameID + ',"Game_Name": "' + document.getElementById("txtGameName").value + '","Player1": "' +
        document.getElementById("txtPlayer1").value + '","Player2": "' + document.getElementById("txtPlayer2").value +
        '","Who_Won_": "' + WhoWon() + '"}');
}

function WhoWon(val) {
    if (document.getElementById("gridRadios1").checked == true)
        return document.getElementById("txtPlayer1").value;
    else if (document.getElementById("gridRadios2").checked == true)
        return document.getElementById("txtPlayer2").value;
    else
        return "Tie";
}

function DeleteGame() {
    var req = new XMLHttpRequest();
    var gameID = document.getElementById("txtGameId").value;
    var url = 'http://localhost:50168/API/GamesResults/' + gameID;

    req.open('DELETE', url)
    req.onload = function () {
        Console.log("Deleted")
        document.getElementById("resolt").innerHTML = "Game was deleted";
    }
    req.onerror = function () {
        alert ("error")
    }

    req.send()
}