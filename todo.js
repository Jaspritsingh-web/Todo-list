let inputtag=document.querySelector("input");
let ultag=document.querySelector("ol");
inputtag.addEventListener("keydown",function(e){
    let key=e.key;
    if(key =='Enter'){
        let value=inputtag.value;
        if(value.length==0){
            return;
        }
        inputtag.value="";
        let litag=document.createElement("li");
      
        litag.innerHTML=` <div>${value}</div>
                         <div class="delete"><i class="fa-solid fa-trash-can"></i></div>`;
                         //here is for string interpolation :it is a way of concatinating a string and  variable
                          //other way :-litag.innerHTML="<div>"+value+"/<div>"<div><i class='fa fa-trash'></i></div>        
                   
       ultag.appendChild(litag);
       handleremoval(litag); //handle removal can be written anywhere in parenthesis it is just adding event listener to the target
    }
   
})
function handleremoval(litag){
 let deletediv=litag.querySelector(".delete");
 deletediv.addEventListener("click",function(){
  litag.remove();
  //console.log("done");
 })
}