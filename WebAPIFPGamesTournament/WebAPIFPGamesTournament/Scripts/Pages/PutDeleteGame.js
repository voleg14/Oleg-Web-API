function findTheGame() {

    var req = new XMLHttpRequest();
    var gameId = document.getElementById("txtWhantedId").value
    var url = 'http://localhost:50142/api/Games/' + gameId
    req.open('GET', url)
    req.onload = function () {
        var item = JSON.parse(req.response)
        console.log(req.reponse)
        console.log(item)
        document.getElementById("txtGameName").value = item["Game_Name"]
        document.getElementById("txtPlayer1").value = item["Player1"]
        document.getElementById("txtPlayer2").value = item["Player2"]

        if (item["Who_Won_"] == item["Player1"]) {
            $("#rdbPlayer1").prop("checked", true)
        } else if (item["Who_Won_"] == item["Player2"]) {
            $("#rdbPlayer2").prop("checked", true)
        } else {
            $("#rdbTie").prop("checked", true)
        }

        $("#resolt").prop("hidden", false)
        $("#deletedMessege").prop("hidden", true)
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}

function putGame() {
    var won = whoWon();
    var req = new XMLHttpRequest();
    var gameId = document.getElementById("txtWhantedId").value
    var url = 'http://localhost:50142/api/Games/' + gameId
    req.open('PUT', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
       console.log("Upddated")
    }
    req.onerror = function () {
        alert('error')
    }
    
    req.send('{"ID":' + document.getElementById("txtWhantedId").value +
        ',"Game_Name": ' +'"'+ document.getElementById("txtGameName").value +
        '","Player1": ' + '"' + document.getElementById("txtPlayer1").value +
        '","Player2": ' + '"' + document.getElementById("txtPlayer2").value +
        '","Who_Won_": ' + '"' + won + '"}')
}

function whoWon() {
    var won = "Tie";
    if ($("#rdbPlayer1").is(":checked")) {
        won = $("#txtPlayer1").value;
        return won
        //return (document.getElementById("txtPlayer1").value);
    }
    else
        if ($("#rdbPlayer2").is(":checked")) {
            won = $("#txtPlayer2").value;
            //return (document.getElementById("txtPlayer2").value);
            return won 
        }
        else return won;
}
function deleteGame() {
    var req = new XMLHttpRequest();
    var gameId = document.getElementById("txtWhantedId").value
    var url = 'http://localhost:50142/api/Games/' + gameId
    req.open('DELETE', url)
    req.onload = function () {
        console.log("DELETED")
        $("#resolt").prop("hidden", true)
        $("#deletedMessege").prop("hidden",false)
        $("#deletedMessege").text = "The game was deleted"
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}