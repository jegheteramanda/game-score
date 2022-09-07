let totalHome = 0
let totalGuest = 0

let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")



function add1home(){
   totalHome += 1
   scoreHome.innerText = totalHome
} 

function add2home(){
    totalHome += 2
    scoreHome.innerText = totalHome
}

function add3home(){
    totalHome += 3
    scoreHome.innerText = totalHome
}



function add1guest(){
   totalGuest += 1
   scoreGuest.innerText = totalGuest
} 

function add2guest(){
    totalGuest += 2
    scoreGuest.innerText = totalGuest
}

function add3guest(){
    totalGuest += 3
    scoreGuest.innerText = totalGuest
}

function reset(){
    scoreGuest.innerText = 0
    scoreHome.innerText = 0
    totalGuest = 0
    totalHome = 0

}
