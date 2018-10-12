function GetAll() {
    var req = new XMLHttpRequest();
    var url1 = 'http://localhost:50168/API/GamesResults/'

    req.open('Get', url1);
    req.onload = function () {
        var list = JSON.parse(req.response)
        console.log(req.response)
        document.getElementById("resolt").innerHTML = " ";
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

function GetByID() {
    var gameId = document.getElementById("txtGameId").value;
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50168/API/GamesResults/' + gameId;

    req.open('Get', url);
    req.onload = function () {
        document.getElementById("resolt").innerHTML = "";
        var item = JSON.parse(req.response)
        console.log(req.response)
        
        for (var filed in item) {
            document.getElementById("resolt").innerHTML += filed + ":" + item[filed] + ", ";
        }
        document.getElementById("resolt").innerHTML += "<br>";

    }

    req.onerror = function () {
        alert('error')
    }

    req.send();

}