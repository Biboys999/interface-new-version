var aleatoire = Math.floor((Math.random() * 10) + 1);
console.log(aleatoire)

let home = document.querySelector("#home");
let win = document.querySelector("#win");
let loose = document.querySelector("#loose");
let plus = document.querySelector("#plus");
let moins = document.querySelector("#moins");

let hpm = home + plus + moins

var btn = document.querySelector('#btn');

let counter = 0

btn.onclick = function() {
    var num1 = document.querySelector('#text-input').value;
    console.log(num1)

    if (num1 == aleatoire) {
        home.style.display = "none";
        moins.style.display = "none";
        plus.style.display = "none";

        win.style.display = "block";
    }
    else if(counter == 2) {
        moins.style.display = "none";
        plus.style.display = "none";

        loose.style.display = "block";
    }
    else if(num1 > aleatoire){
        home.style.display = "none";
        plus.style.display = "none";

        moins.style.display = "block";
        counter++
    }
    else if(num1 < aleatoire){
        home.style.display = "none";
        moins.style.display = "none";

        plus.style.display = "block";
        counter++
    }
}

let restart = document.querySelector("#restart");

restart.onclick = function(){
    location.reload();
}
