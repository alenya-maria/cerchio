/*Area  e Circonferenza del cerchio*/
function calcolaCirconferenza(){
    var r = document.forms.circonferenza.r.valueAsNumber;
    var circonferenza = 2 * r * (Math.PI);
document.getElementById("Circonferenza").innerHTML=" Circonferenza = " + circonferenza;
}
function calcolaArea(){
    var r = document.forms.circonferenza.r.valueAsNumber;
    var area = Math.pow(r,2) * (Math.PI);
document.getElementById("Area").innerHTML=" Area = " + area;
}
function cancella(){
document.getElementById("Circonferenza").innerHTML=" ";
document.getElementById("Area").innerHTML=" ";
}


