let abtn = document.querySelector('.text button');

let like = false;
abtn.addEventListener('click',function(){
    like = !like;
    if(like){
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