window.addEventListener('scroll',()=>{
    const navbar=document.getElementById('nav');

    if(window.scrollY>0){
        navbar.classList.add('sticky');
    }
    if(window.scrollY<=0){
        navbar.classList.remove('sticky');
    }

})