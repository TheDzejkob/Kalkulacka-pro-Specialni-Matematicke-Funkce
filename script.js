function TOOL(){
    let vysledeLabel = document.getElementById("vysl");
    let veli = document.getElementById("velikost");
    var i = veli.value;
    var cis1 = 0;
    var cis2 = 1;
    var list = [];
    while(i > 0){
        var vysledek = cis1 + cis2;
        list.push(vysledek);
        cis1 = cis2;
        cis2 =vysledek;

        i -= 1;
    }
    vysledeLabel.textContent = list.join(', ');
}
function logari(){
    let vysledeLabel = document.getElementById("vysl");
    var base = document.getElementById("base").value;
    var hodnota = document.getElementById("hodnota").value;

    const vys = Math.log(hodnota)/Math.log(base);
    vysledeLabel.textContent = vys;
}

function cosi(){
    let vysledeLabel = document.getElementById("vysl");
    var uhel = document.getElementById("uhel").value;

    const vys = Math.cos(uhel);
    vysledeLabel.textContent = vys;
}
function sini(){
    let vysledeLabel = document.getElementById("vysl");
}

function sel(){
    var a = document.getElementById("select").value;
    let vysledeLabel = document.getElementById("vysl");
    if(a== "TOOL"){
        document.getElementById("fibo").style.display="block"
        document.getElementById("loga").style.display="none"
        document.getElementById("cosi").style.display="none"
        vysledeLabel.textContent=""
    }
    if(a== "LOG"){
        document.getElementById("loga").style.display="block"
        document.getElementById("fibo").style.display="none"
        document.getElementById("cosi").style.display="none"
        vysledeLabel.textContent=""
    }
    if(a== "COS"){
        document.getElementById("cosi").style.display="block"
        document.getElementById("loga").style.display="none"
        document.getElementById("fibo").style.display="none"
        vysledeLabel.textContent=""
    }
    else{

    }
}
