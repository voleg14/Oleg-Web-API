function PostGame() {
    var url1 = 'http://localhost:50168/API/GamesResults/'
    var item = {
        Game_Name: $("#txtGameName").val(),
        Player1: $("#txtPlayer1").val(),
        Player2: $("#txtPlayer2").val(),
        Who_Won_: WhoWon()
    }

    var ajaxPostData = {
        type: "POST",
        url: url1,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item)
    }

    $.ajax(ajaxPostData).then(
        function (data) {
            console.log(data)
            document.getElementById("resolt").innerHTML = " ";
            for (var field in item) {
                $("#resolt").append(" " + field + ": " + item[field] + ", ")
            }
            $("#resolt").append("<br>")
        }
    ).fail(
        function (err) {
            console.error(err)
        }
    )
}

function WhoWon(res) {

    if ($("#gridRadios1").prop("checked", true))
        return $("#txtPlayer1").val()
    else if ($("#txtPlayer2").prop("checked", true))
        return $("#txtPlayer2").val()
    else
        return "Tie"
}

function GetAllGames() {
    $.ajax({
        url: 'http://localhost:50168/API/GamesResults/'
    }).then(
        function (data) {
            console.log(data)
            document.getElementById("resolt").innerHTML = " ";
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $("#resolt").append(" " + field + ": " + item[field] + ", ")
                }
                $("#resolt").append("<br>")
            }
        }
    )
}