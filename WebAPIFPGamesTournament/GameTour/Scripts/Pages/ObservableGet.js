function GetAll() {
    const url = 'http://localhost:50168/API/GamesResults/'

    fetch(url).then((response) => response.json())
        .then(function (data) {
            //document.getElementById("result").innerHTML = "";
            $("#result").html(" ");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];

                for (var filed in item) {
                    document.getElementById("result").innerHTML += filed + ": " + item[filed] + ", ";
                }
                document.getElementById("result").innerHTML += "<br>";
            }

        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
}

function GetByID() {
    var gameId = $("#txtGameId").val();
    const url = 'http://localhost:50168/API/GamesResults/' + gameId

    fetch(url).then((response) => response.json())
        .then(function (data) {
            console.log(data);
            //document.getElementById("result").innerHTML = "";
            $("#result").html(" ");
            for (var filed in data) {
                document.getElementById("result").innerHTML += filed + ": " + data[filed] + ", ";
            }
            document.getElementById("result").innerHTML += "<br>";

        }).catch(function (error) {
            console.log(JSON.stringify(error));
        });
}