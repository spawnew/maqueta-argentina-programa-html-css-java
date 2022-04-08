
function cambiar()
{
    document.getElementById("edit").style.display="block";
let texto = document.getElementById("abajo").innertext;
console.log(texto);

};
function mifuncion2(valor){
    document.getElementById("abajo").innerText=valor;
    
    };
    



function logMessage(message){


    console.log(message+"<br>");
    }
//controlo si se presiona el enter
let textarea=document.getElementById("edit")
textarea.add.getEventListener('keyup', (e) => {
    logMessage('key "${e.key}" released [event: keyup]' );
    if(e.key=="Enter"){
        document.getElementById("edit").style.display="none";
        
    }
});


    








