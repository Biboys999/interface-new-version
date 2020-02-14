

var aleatoire = Math.floor((Math.random() * 10) + 1);
console.log(aleatoire)

let home = document.querySelector("#home");
let win = document.querySelector("#win");
let loose = document.querySelector("#loose");
let chance2 = document.querySelector("#chance2");
let chance1 = document.querySelector("#chance1");

var btn = document.querySelector('#btn');

let counter = 0


btn.onclick = function() {
    var num1 = document.querySelector('#text-input').value;
    console.log(num1)

    if (num1 == aleatoire) {
        home.style.display = "none";
        win.style.display = "block";
    }
    else{
        home.style.display = "none";
        chance2.style.display = "block";
        counter++;
        if (counter == 3) {
        home.style.display = "none";
        loose.style.display = "block";

        }
    }
}

/*
btn3.onclick = function(){
    location.reload();
}
*/