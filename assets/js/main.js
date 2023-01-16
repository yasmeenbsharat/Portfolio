let navbar=document.getElementById("navbar");
window.addEventListener("scroll",function(){
   if(window.scrollY>50){
    navbar.classList.add('bg-white');
    navbar.classList.add('shadow');
    navbar.classList.remove('bg-transparent');
   }else{


    navbar.classList.remove('bg-white');
    navbar.classList.remove('shadow');
    navbar.classList.add('bg-transparent');
   }


});

//move to top
 let moveTop=document.getElementById("mov-to-top");
window.addEventListener("scroll",function(){
     
    let sectionPosition=this.document.getElementById('services').offsetTop;
    if( this.window.scrollY>sectionPosition){
        moveTop.style.opacity='1';
    }else{
        moveTop.style.opacity='0'; 
    }



});
moveTop.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:'smooth'

    })


})
//smooth scroll
let links=document.querySelectorAll("nav .nav-link");

links.forEach(function(link){

link.addEventListener("click",function(e){
    e.preventDefault();
    let currentId = e.target.attributes.href.value;
    let sectionPosition= document.querySelector(currentId).offsetTop;
    window.scroll({
        top:sectionPosition,
        behavior:'smooth'

    }


   )



});


});