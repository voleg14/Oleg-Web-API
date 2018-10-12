
function GetAll() {
    $.ajax({
        // empty results
        // url: 'http://localhost:3000/api/'

        // 1000 results
        // url: 'http://localhost:3000/api/largeResults/'

        // error
        url: 'http://localhost:3000/api/err/'

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
        },
        (error)=>{
            console.log(error);
            document.getElementById("resolt").innerHTML = " there is some error ";
        }
        )
}

