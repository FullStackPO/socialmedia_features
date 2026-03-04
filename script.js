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
    img : "https://plus.unsplash.com/premium_photo-1682095763838-0ca2593193bd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
       {dp:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1584983843258-869be4f44c41?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        {dp:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img : "https://images.unsplash.com/photo-1625794913247-b8138fd9edb3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }]
let stories = document.querySelector(".stories");
let clutter = "";
storycontent.forEach(function(elem, idx){
    clutter += `
    <div class="story">
        <img id=${idx} src="${elem.dp}">
    </div>
    `
})
stories.innerHTML = clutter;

stories.addEventListener('click', function(dets){
    document.querySelector('.full_screen').style.display = "block";
    document.querySelector('.full_screen').style.backgroundImage = `url(${storycontent[dets.target.id].img})`;
    
    setTimeout(()=>{
        document.querySelector('.full_screen').style.display = "none";
    },3000)

})