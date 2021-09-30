let currIn=document.querySelector('.dispscr');
let ansScr = document.querySelector('.ansscr');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#equals');

let now=[];
clearbtn.addEventListener("click",()=>{
    now=[""];
    ansScr.innerHTML=0;
    currIn.className="dispscr";
    ansScr.className="ansscr";
    ansScr.style.color="#201E1F";
});
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if(!btn.id.match("erase")){
            now.push(btn.value);
            currIn.innerHTML=now.join('');
            if(btn.classList.contains('num')){
                ansScr.innerHTML=eval(now.join(''));
            }
        }
        if(btn.id.match('erase')){now.pop();
        currIn.innerHTML=now.join('');
        ansScr.innerHTML=eval(now.join(''));
    }
    if(btn.id.match('equals')){
        currIn.className="ansscr";
        ansScr.className="dispscr";
        ansScr.style.color="#3066BE";
    }
    if(typeof eval(now.join(""))=="undefined"){
        ansScr.innerHTML=0;
        
    }
    })
})

