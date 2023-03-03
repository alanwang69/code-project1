var rnd =0;
function Random() {
    rnd = Math.floor(Math.random() * 6+1);
    document.getElementById('codeButton').value = rnd;
}
function changeImg(){
    var image = document.getElementById("Dice");
    if(rnd==1){
        image.src = "https://ecdn.teacherspayteachers.com/thumbitem/Roll-and-Color-Activity-to-Identify-Dots-on-Dice-and-the-Corresponding-Number-2766397-1657305559/original-2766397-2.jpg"
    }
    else if(rnd==2){
        image.src ="https://kevan.org/images/liarsdice/die2.png"
    }
    else if(rnd==3){
        image.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/2048px-Dice-3.svg.png"
    }
    else if(rnd==4){
        image.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1024px-Dice-4-b.svg.png"
    }
    else if(rnd==5){
        image.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1200px-Dice-5-b.svg.png"
    }
    else if(rnd==6){
        image.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png"
    }
    else{
        alert('ERROR')
    }
}

var button = document.getElementById("codeButton");
var image = document.getElementById("Dice");
button.addEventListener("click",function(){
    Random();
    changeImg();
});
