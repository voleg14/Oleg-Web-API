function GetAll() {

    this.GameResultsWebAPI = new GameResultWebAPI(false);

    let result = this.GameResultsWebAPI.FireGet('empty');
      result.then(
        function (data) {
            console.log(data)
            document.getElementById("resolt").innerHTML = " ";
            if(data.length == 0){
                document.getElementById("resolt").innerHTML = "there are no games found!!"
            }
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $("#resolt").append(" " + field + ": " + item[field] + ", ")
                }
                $("#resolt").append("<br>")
            }
        },
        (err) =>{
            console.error(err)
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