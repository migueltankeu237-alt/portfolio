
const menuhanburger = document.querySelector('.hanburger');
     const nav = document.querySelector('.contenair');

menuhanburger.addEventListener('click' ,function(){
    if(nav.classList.contains("content")){
        nav.classList.remove("content");
    }
    else{
        nav.classList.add("content")
    }
});

 const inscription = document.querySelector('.Inscription')
 const formulaire = document.querySelector('.formulaire')

 inscription.addEventListener('click' ,()=>{
   if(nav.classList.contains("content")){
      document.location.href="inscription.html"
   }
   else{ 
    formulaire.classList.add('form')
   }
  })

const croix = document.querySelector('.croix')

croix.addEventListener('click' ,()=>{
    formulaire.classList.remove("form")
});