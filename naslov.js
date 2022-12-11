var h1Naslov = document.getElementsByTagName('h1')[0];
var naslov = h1Naslov.textContent;
h1Naslov.textContent = "";
nizSlova = naslov.split(' ');

console.log(nizSlova)

for(let i=0; i<nizSlova.length; i++){
    var span = document.createElement('span');
    
    if(i==0 || i==1 || i==2){
        span.style.color = 'black';
        span.textContent = nizSlova[i] + " ";
    }
    
    if(i==3){
        span.textContent = nizSlova[i] + " ";
    }
    
    if(i==4){
        var prvaPol = nizSlova[i].substring(0,nizSlova[i].length/2);
        var drugaPol = nizSlova[i].substring(nizSlova[i].length/2,nizSlova[i].length);
        
        var spanPrva = document.createElement('span');
        var spanDruga = document.createElement('span');

        spanPrva.textContent = prvaPol;
        spanDruga.textContent = drugaPol;

        spanPrva.style.color = 'black';

        span.appendChild(spanPrva);
        span.appendChild(spanDruga);

    }

    h1Naslov.appendChild(span);
}


