window.addEventListener('load', start,false);
function start() {

    var lista= document.getElementsByTagName('li');
    for (let i = 0; i < lista.length; i++) {
        if (i<lista.length/2) {
            lista[i].style= 'background-color:black; border-right: 1px solid white; border-bottom: 1px solid white'; 
            lista[i].firstElementChild.style='color:white;';
        }
        else{
            lista[i].style= 'background-color:white; border-right: 1px solid black;border-bottom:1px solid black;';
        }
       
        
    }



    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#navMeni");
    const iks = document.querySelector("#iks");
    burger.addEventListener("click", () => {
        menu.style.display = "flex";
    });
    iks.addEventListener("click", () => {
        menu.style.display = "none";
    });



    const loader = document.querySelector('.loader');
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitioned',sklanja,false);
    function sklanja() {
        document.body.removeChild('loader');
    }


    



}