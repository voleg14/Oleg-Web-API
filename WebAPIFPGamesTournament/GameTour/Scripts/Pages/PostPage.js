function PostGame() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50168/API/GamesResults/'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function() {
        document.getElementById("resolt").innerHTML = "the game was added!"
    }
    req.onerror = function() {
        alert('error')
    }

    
    var newGame = {
        Game_Name: document.getElementById("txtGameName").value,
        Player1: document.getElementById("txtPlayer1").value,
        Player2: document.getElementById("txtPlayer2").value,
        Who_Won_: WhoWon()
    }
    req.send(JSON.stringify(newGame));
}

function WhoWon(val) {
    if (document.getElementById("gridRadios1").checked == true)
        return document.getElementById("txtPlayer1").value;
    else if (document.getElementById("gridRadios2").checked == true)
        return document.getElementById("txtPlayer2").value;
    else
        return "Tie";
}

function GetAllGames() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50168/API/GamesResults/'

    req.open('Get', url);
    req.onload = function () {
        document.getElementById("resolt").innerHTML = "";
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