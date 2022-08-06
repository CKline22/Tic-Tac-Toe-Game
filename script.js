//let score = document.querySelectorAll('.score')
let box = document.querySelectorAll('.box')
 box = Array.from(box)

 let player = "x"

 //let score = 0;

//winningConditions []
//checkWin function () {
    //winningConditions.forEach(function(condition){
        //let check = condition.every(index => box[index].innerText == player)
        //if (check){
            //alert(player + "Has Won!")
            //score ++
        //}
    //})
//}

 box.forEach(function(box){
     box.addEventListener('click', function(){
        if (box.innerText != "") return
         box.innerText = player
         //checkWin()
         player = player == "x" ? "o" : "x"
     })
 })