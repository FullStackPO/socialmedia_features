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

let storycontent = [{dp:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
       {dp:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        {dp:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        {dp:"https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }]
let stories = document.querySelector(".stories");
let story = document.querySelector(".story");
let clutter = "";
storycontent.forEach(function(elem){
    clutter += `
    <div class="story">
        <img src="${elem.dp}">
    </div>
    `
})
stories.innerHTML = clutter;
