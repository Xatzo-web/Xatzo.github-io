const koumpia=document.querySelectorAll("#buttons button");

const display=document.getElementById("display");

const symvolo=document.getElementById("praxh");

const ison=document.getElementById("ison");

let arithmos1="";
let arithmos2="";
let emfanisi = "";


let pernaeiStonDeytero=false;

koumpia.forEach(function(koumpi){
    koumpi.addEventListener("click",function(){
        if(pernaeiStonDeytero==false)
        {
            arithmos1+=koumpi.value;
            emfanisi += koumpi.value;
            display.textContent=emfanisi;
            
        }else
        {
            arithmos2+=koumpi.value;
            emfanisi += koumpi.value;
            display.textContent = emfanisi;
        } 
    })
})

symvolo.addEventListener("change",function(){
    pernaeiStonDeytero=true;
    emfanisi += symvolo.value;
    display.textContent = emfanisi;
})

ison.addEventListener("click",function(){

    let num1=parseFloat(arithmos1);
    let num2=parseFloat(arithmos2);
    let apotelesma=0;

    if(symvolo.value=="+")
    {
        apotelesma=num1+num2;
    }
    else if(symvolo.value=="-")
    {
        apotelesma=num1-num2;
    }
    else if(symvolo.value=="/")
    {
        if(num2==0)
        {
            display.textContent = "Σφάλμα: διαίρεση με 0!";
            return;
        }
        else
        {
             apotelesma=num1/num2;
        }
    }
    else{
        apotelesma=num1*num2;
    }

     emfanisi += "=" + apotelesma;
    display.textContent = emfanisi; 
    arithmos1 = apotelesma.toString();
    arithmos2 = "";
    pernaeiStonDeytero=false;
    emfanisi = arithmos1;
})
   