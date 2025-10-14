const roles = ["Web developer","Computer engeering student","Contents creater"];

const typingElement = document.querySelector(".typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){
    const current = roles[roleIndex];
    if(!deleting){
        typingElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if(charIndex === current.length)
        {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else{
        typingElement.textContent = current.substring(0, charIndex -1);
        charIndex--;
        if(charIndex === 0)
            {   
                deleting = false;
                roleIndex = (roleIndex + 1)% roles.length;
             }

    }
    setTimeout(typeEffect,deleting ? 50 : 100);
}

typeEffect();