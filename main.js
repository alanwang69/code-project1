
function Random() {
    var rnd = Math.floor(Math.random() * 6);
    document.getElementById('codeButton').value = rnd;
    alert(rnd);
}

function changeImg(){
    var image = "";
    if(rnd==1){
        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png"
    }
    else if(rnd==2){
        image =""
    }
    else if(rnd==3){
        image =""
    }
    else if(rnd==4){
        image =""
    }
    else if(rnd==5){
        image =""
    }
    else if(rnd==6){
        image =""
    }
    else{
        alert('ERROR')
    }
}
