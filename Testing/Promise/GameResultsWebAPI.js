class GameResultWebAPI {

    constructor(realServer = true){
        this.realServer = realServer ;
    }

    FireGet(testResult) {
        if (this.realServer){
            let promise =  $.ajax({
                url: 'http://localhost:50168/API/GamesResults/'
            })
            return promise
        }
    switch (testResult){
    case "empty":{
        let promise = new Promise((resolve , reject) =>{
            let game = []
            resolve(game)
        })
        return promise;
    }
    case "largeResults":{
        let promise = new Promise((resolve , reject) =>{
            let game = []
            for(let i = 0 ; i < 10000 ; i++){
                game.push(new gameResult(i,'gameNumber'+i,'player1','player2','noMater'))
            }
            resolve(game)
        })
        return promise;
        new gameResult(1,'Chess','oleg','pavel','oleg'),
        new gameResult(2,'chess','sergey','Denis','sergey')
    }
    case "error":{
            let promise = new Promise((resolve , reject) =>{
                let game = []
                reject('my error')
            })
            return promise;
    }

    }
}
}