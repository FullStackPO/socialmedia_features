let abtn = document.querySelector('.text button');
let limg = document.querySelector('.postcard img');
let emote = document.querySelector('.postcard i'); 

let add = false;
abtn.addEventListener('click',function(){
    add = !add;
    if(add){
        abtn.style.backgroundColor = 'white';
        abtn.style.color = 'rgb(89, 89, 255)';
        abtn.style.border = '2px solid rgb(89, 89, 255)';
        abtn.innerHTML = 'Following';
    }
    else{
        abtn.style.backgroundColor = 'rgb(89, 89, 255)';
        abtn.style.color = 'white';
        abtn.innerHTML = 'Follow';
    } 
})

let count = 0;
limg.addEventListener('dblclick',function(){
    console.log('click');
    emote.style.opacity = 1;
    setTimeout(()=>{
       count--;
       emote.style.top = count+'px';
       console.log(count); 
    },500)
    setTimeout(function(){
      emote.style.opacity = 0;  
    },1300)
    
    setTimeout(() => {

        emote.style.transition = "none";
        emote.style.top = "100px";
        emote.offsetHeight;
        emote.style.transition = "all 2s ease-in-out";

    }, 2000);
})