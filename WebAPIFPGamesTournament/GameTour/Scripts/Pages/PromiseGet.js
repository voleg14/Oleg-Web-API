function GetAllTest() {
    //var req = new XMLHttpRequest();
    //var url1 = 'http://localhost:50168/API/GamesResults/'

    //req.open('Get', url1);
    //req.onload = function () {
    //var list = JSON.parse(req.response)
    var list = PromiseGet();
    console.log(list)
    document.getElementById("resolt").innerHTML = " ";
    for (var i = 0; i < list.length; i++) {
        var item = list[i];

        for (var filed in item) {
            document.getElementById("resolt").innerHTML += filed + ": " + item[filed] + ", ";
        }
        document.getElementById("resolt").innerHTML += "<br>";
    }


    req.onerror = function () {
        alert('error')
    }

    req.send();
}


function PromiseGet() {
    var whantedAnser = document.getElementById("txtGameId");

    switch (whantedAnser) {
        // empty
        case 1: {
            var p = new Promise(function (resolve, reject) {
                var gameRsults = [];
                resolve(gameRsults);
            });
            return p;
        }
        // 10000 results
        case 2: {
            var p = new Promise(function (resolve, reject) {
                List < object > gameRsults = new List < object > [] ;
                for (let i = 0; i < 10000; i++) {
                    //gameRsults(CreatGame(i, "gameNumber" + i, "player1 from:" + i, "player2 from:" + i, "player1 from:" + i));
                    gameRsults.Add(CreatGame(i, "gameNumber" + i, "player1 from:" + i, "player2 from:" + i, "player1 from:" + i))
                }
                resolve(gameRsults);
            });
                return p;
            };
        //error
        case 3: {
            var p = new Promise(function (resolve, reject) {
                var gameRsults = [];
                reject("My error");
            });
            return p;
        }
        default: {
            GetAll()
        }
    }
}

function CreatGame( Id, gameName, player1, player2, whoWon) {
    var newGame = {
        ID: Id,
        Game_Name: gameName,
        Player1: player1,
        Player2: player2,
        Who_Won_: whoWon
    }
    return newGame;
}