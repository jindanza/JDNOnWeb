"use strict";

const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myHead = document.querySelector('.judul');

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 100);
}

addEventListener('scroll', () =>{
    if (scrolled() > 6) {
        myHead.style.setProperty('background',"var(--wrn3)");
    }else if (scrolled() > 3) {
        myHead.style.setProperty('background',"var(--wrn2)");
    } else{
        myHead.style.setProperty('background',"var(--wrn1)");
    }
   
})
