function GetGameByID() {
    var gameId = $("#txtGameId").val();
    var url1 = 'http://localhost:50168/API/GamesResults/' + gameId
    $.ajax({
        url: url1
    }).then(
        function (data) {
            console.log(data)

            $("#putForm").prop("hidden",false);

            $("#txtGameName").val(data.Game_Name);
            $("#txtPlayer1").val(data.Player1);
            $("#txtPlayer2").val(data.Player2);

            if (data.Player1 == data.Who_Won_)
                $("#gridRadios1").prop("checked", true)
            else if (data.Player2 == data.Who_Won_)
                $("#gridRadios2").prop("checked", true)
            else
                $("#gridRadios3").prop("checked", true)
        }
    ).fail(
        function (err) {
            console.log(err)
            $("#resolt").append("That Id not found!");
        }
        )
}



function PutGame() {
    var gameId = $("#txtGameId").val();
    var url1 = 'http://localhost:50168/API/GamesResults/' + gameId

    var item = {
        Game_Name: $("#txtGameName").val(),
        Player1: $("#txtPlayer1").val(),
        Player2: $("#txtPlayer2").val(),
        Who_Won_: WhoWon()
    }

    console.log(item);

    var ajaxPutData = {
        type: "PUT",
        url: url1,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify(item)
    }

    $.ajax(ajaxPutData).then(
        function (data) {
            console.log(data)

            $("#resolt").html(" ");
            for (var field in item) {
                $("#resolt").append(" " + field + ": " + item[field] + ", ")
            }
            $("#resolt").append("<br>")
        }
    ).fail(
        function (error) {
            console.log(error)
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
            //document.getElementById("resolt").innerHTML = " ";
            $("#resolt").html(" ");
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

function DeleteGame() {

    var gameId = $("#txtGameId").val();
    var url1 = 'http://localhost:50168/API/GamesResults/' + gameId

    var ajaxDeleteData = {
        type: "DELETE",
        url: url1,
    }

    $.ajax(ajaxDeleteData).then(
        function (data) {
            console.log("Deleted")
            $("#resolt").html = "The game Deleted!";
        }
    ).fail(
        function (err) {
            console.log(Error)
            $("#resolt").html = "Error!!!!";
        })
}
