
function postGame() {
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50142/api/Games/'
    req.open('POST', url)
    req.setRequestHeader("Content-Type", "application/json")

    req.onload = function () {
        alert('Created!')
    }
    req.onerror = function () {
        alert('error')
    }
    var item = {
        Game_Name: document.getElementById("txtGameName").value,
        Player1: document.getElementById("txtPlayer1").value,
        Player2: document.getElementById("txtPlayer2").value,
        Who_Won_: whoWon()
    }
    req.send(JSON.stringify(item));
}

function whoWon() {
    
    if ($("#rdbPlayer1").is(":checked"))
        return $("#txtPlayer1").val()
    else
        if ($("#rdbPlayer2").is(":checked"))
            return $("#txtPlayer2").val()
        else return "Tie";
}

function getAllGames2() {

    document.getElementById("result").innerHTML = "";
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50142/api/Games/'
    req.open('GET', url)
    req.onload = function () {
        var list = JSON.parse(req.response)
        console.log(req.reponse)
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("result").innerHTML += field +
                    " : " + item[field] + ", "
            }
            document.getElementById("result").innerHTML += "<br>"
        }
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}
