let navbar=document.getElementById("navbar"),moveTop=(window.addEventListener("scroll",function(){50<window.scrollY?(navbar.classList.add("bg-white"),navbar.classList.add("shadow"),navbar.classList.remove("bg-transparent")):(navbar.classList.remove("bg-white"),navbar.classList.remove("shadow"),navbar.classList.add("bg-transparent"))}),document.getElementById("mov-to-top")),links=(window.addEventListener("scroll",function(){var e=this.document.getElementById("services").offsetTop;this.window.scrollY>e?moveTop.style.opacity="1":moveTop.style.opacity="0"}),moveTop.addEventListener("click",function(){window.scroll({top:0,behavior:"smooth"})}),document.querySelectorAll("nav .nav-link")),body=(links.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e=e.target.attributes.href.value,e=document.querySelector(e).offsetTop,window.scroll({top:e,behavior:"smooth"})})}),document.body),loading=(body.style.overflow="hidden",document.querySelector(".loading"));loading.style.opacity="1",loading.style.visibility="visible",loading.style.transition="1s",window.addEventListener("load",function(){setTimeout(function(){loading.style.opacity="0",loading.style.visibility="hidden",loading.style.transition="1s",body.style.overflow="auto"},2e3)});