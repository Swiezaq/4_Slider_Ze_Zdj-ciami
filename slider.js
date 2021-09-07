
var numer = Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;

function ustawslajd(nrslajdu)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu -1;
    
    schowaj();
    setTimeout("zmienslajd()",500)
}

function schowaj()
{
   $("#slider").fadeOut(500);
   
}

function zmienslajd(width = 200, height = 300)
    {
        //console.log() daje nam logi w informacji o stronie (odpalamy ją, F12 i 'Console')
        console.log(width + " " + height)
        numer++;
        if (numer>5) numer=1;
        "<div><h1>XD</h1></div>"


        //var plik = '<img src="IMG/marines_' + numer + '.jpg" width="100" height="100"/>';
        var plik2 = `<img src="IMG/marines_${numer}.jpg" widht="${width*numer/2}" height="${height*numer/2}"/>`
        console.log(plik2)
    
        document.getElementById("slider").innerHTML = plik2;
        $("#slider").fadeIn(500); 

        timer1 = setTimeout("zmienslajd(200,400)",5000);
        timer2 = setTimeout("schowaj()",4500);
    }

