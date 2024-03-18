const menus=document.querySelector('nav ul');
const header=document.querySelector('header');
const menuBtn=document.querySelector('.menu-btn');
const closeBtn=document.querySelector('.close-btn');

menuBtn.addEventListener('click',()=>{
    menus.classList.add("display");
});
closeBtn.addEventListener('click',()=>{
    menus.classList.remove("display");
});


window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>20){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }

    // console.log(document.documentElement.scrollTop);
})



const countersEL=document.querySelectorAll('.number')
countersEL.forEach((counters)=>{
    counters.textContent=0

    increaseCounters();
    function increaseCounters(){
        let currentNum=+counters.textContent;
        const dataCeil=counters.getAttribute("data-ceil");

        const increment=dataCeil/50;
        currentNum=Math.ceil(currentNum+increment);

        if(currentNum<dataCeil){
            counters.textContent=currentNum;
            setTimeout(increaseCounters,90)
        }else{
            counters.textContent=dataCeil;
        }
    }
});

