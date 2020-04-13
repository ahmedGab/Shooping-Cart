/*let r=document.getElementsByClassName("promo");

for (let i=0;i<r.length;i++){
    let x=document.getElementsByClassName("fa-shopping-cart")
  x.addEventListener("click",function(){
    document.querySelectorAll("h3.card-text").innerHTML+=10
    console.log('a')
  })
}
*/


let x=document.getElementsByClassName("fa-shopping-cart")
let total=0
for (let i=0;i<x.length;i++){
    x[i].addEventListener('click',()=>{
        let modal=document.getElementById("modal-menu")        
      let listes=document.createElement("div")
      
       listes.setAttribute("class", "Div1")
       let liste=document.createElement("h4")
       let nomP=document.getElementsByClassName("card-title")[i].innerHTML
       let nom=document.createTextNode(nomP)
      liste.appendChild(nom)
       listes.appendChild(liste)
      
       let liste1=document.createElement("h4")
       
       let d= document.getElementsByClassName("card-text")[i].innerHTML
       let prix=document.createTextNode(d)
      
       liste1.appendChild(prix)
       listes.appendChild(liste1)
       let y = document.createElement("input");
       y.setAttribute("type", "text");
       y.setAttribute("value",1);
       y.disabled=true
       listes.appendChild(y)

       
       modal.appendChild(listes)
      let price=document.getElementsByClassName("card-text")
let prixt=document.getElementById("prix")
total+=Number(price[i].dataset.price)

prixt.innerHTML=`PrixTotale: ${total}TND`
        
      
})
}


  
  let psw=document.getElementById("psw")
  let Repassword=document.getElementById("Repsw")
  
function validatePassword(){
  if(Repassword.value != psw.value) {
    Repassword.setCustomValidity("Les mots de passes que vous avez saisis ne correspondent pas");
  } else {
    Repassword.setCustomValidity('');
  }
}

psw.onchange = validatePassword;
Repassword.onkeyup = validatePassword;
/*

function Somme(){
    document.querySelectorAll(".promo li")[2].addEventListener("click",function(){
        let prix=document.querySelectorAll("h3.modal-body")[0].innerHTML =document.querySelectorAll("h3.card-text")[0].innerHTML
        console.log(prix)

        console.log(5)

        })
}

    */
   