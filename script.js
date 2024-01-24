function TOOL(){
    let vysledeLabel = document.getElementById("vysl-fibo");
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
    let vysledeLabel = document.getElementById("vysl-loga");
    var base = document.getElementById("base").value;
    var hodnota = document.getElementById("hodnota").value;

    const vys = Math.log(hodnota)/Math.log(base);
    vysledeLabel.textContent = vys;
}

function cosi(){
    let vysledeLabel = document.getElementById("vysl-cosi");
    var uhel = document.getElementById("uhel").value;

    const vys = Math.cos(uhel);
    vysledeLabel.textContent = vys;
}

function sini(){
    let vysledeLabel = document.getElementById("vysl-sini");
    var uhel = document.getElementById("uhel1").value;
    const vys = Math.sin(uhel * Math.PI / 180);
    vysledeLabel.textContent = vys;
}

function faki(){
    let vysledeLabel = document.getElementById("vysl-faki");
    var hodnotaFaktorial = document.getElementById("hod").value;
        const faktorialResult = (function factorial(n) {
            if (n === 0 || n === 1) {
                    return 1;
            } else {
                return n * factorial(n - 1);
            }
        })(parseInt(hodnotaFaktorial));
    vysledeLabel.textContent = faktorialResult;
}


function sel(){
    var a = document.getElementById("select").value;
    let vysledeLabel = document.getElementById("vysl");
    if(a== "TOOL"){
        document.getElementById("fibo").style.display="block"
        document.getElementById("loga").style.display="none"
        document.getElementById("cosi").style.display="none"
        document.getElementById("sini").style.display="none"
        document.getElementById("faki").style.display="none"
        vysledeLabel.textContent=""
    }
    if(a== "LOG"){
        document.getElementById("loga").style.display="block"
        document.getElementById("fibo").style.display="none"
        document.getElementById("cosi").style.display="none"
        document.getElementById("sini").style.display="none"
        document.getElementById("faki").style.display="none"
        vysledeLabel.textContent=""
    }
    if(a== "COS"){
        document.getElementById("cosi").style.display="block"
        document.getElementById("loga").style.display="none"
        document.getElementById("fibo").style.display="none"
        document.getElementById("sini").style.display="none"
        document.getElementById("faki").style.display="none"
        vysledeLabel.textContent=""
    }
    if(a== "SIN"){
        document.getElementById("sini").style.display="block"
        document.getElementById("loga").style.display="none"
        document.getElementById("fibo").style.display="none"
        document.getElementById("cosi").style.display="none"
        document.getElementById("faki").style.display="none"
        vysledeLabel.textContent=""
    }
    if(a== "FAK"){
        document.getElementById("faki").style.display="block"
        document.getElementById("sini").style.display="none"
        document.getElementById("loga").style.display="none"
        document.getElementById("fibo").style.display="none"
        document.getElementById("cosi").style.display="none"
        vysledeLabel.textContent=""
    }


    if(a== "default"){
        document.getElementById("loga").style.display="none"
        document.getElementById("fibo").style.display="none"
        document.getElementById("cosi").style.display="none"
        document.getElementById("sini").style.display="none"
        document.getElementById("faki").style.display="none"
        vysledeLabel.textContent=""
    }
    else{

    }
}
