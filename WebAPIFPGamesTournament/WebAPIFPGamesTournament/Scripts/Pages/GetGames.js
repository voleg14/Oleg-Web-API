function getAllGames() {
    document.getElementById("results").innerHTML = "";
    var req = new XMLHttpRequest();
    var url = 'http://localhost:50142/api/Games/'
    req.open('GET', url)
    req.onload = function () {
        var list = JSON.parse(req.response)
        console.log(req.reponse)
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            for (var field in item) {
                document.getElementById("results").innerHTML += field +
                    " : " + item[field] + ", "
            }
            document.getElementById("results").innerHTML += "<br>"
        }
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}

function getGameById() {
    document.getElementById("results").innerHTML="";
    var req = new XMLHttpRequest();
    var gameId = document.getElementById("txtWantedId").value
    var url = 'http://localhost:50142/api/Games/' + gameId
    req.open('GET', url)
    req.onload = function () {
        var item = JSON.parse(req.response)
        console.log(req.reponse)
        console.log(item)
            for (var field in item) {
                document.getElementById("results").innerHTML += field +
                    " : " + item[field] + ", "
            }
            document.getElementById("results").innerHTML += "<br>"
        
    }
    req.onerror = function () {
        alert('error')
    }
    req.send()
}