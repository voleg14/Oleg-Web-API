function GetAll() {
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

function GetByID() {
    var gameId = $("#txtGameId").val();
    var url1 = 'http://localhost:50168/API/GamesResults/' + gameId
    $.ajax({
        url: url1
    }).then(
        function (data) {
            console.log(data)
            document.getElementById("resolt").innerHTML = " ";
            for (var field in data) {
                $("#resolt").append(" " + field + ": " + data[field] + ", ")
            }
            $("#resolt").append("<br>")
        }
    )
}