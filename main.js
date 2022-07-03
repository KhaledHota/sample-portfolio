let btn = document.getElementById('btn');

window.onscroll = function(){
    if(scrollY >= 1100){
        btn.style.display = 'block';
    }else{
        btn.style.display = 'none';
    }
}

btn.onclick = function(){
    scroll({
        right:0,
        top:0,
        behavior:"smooth"
    })
}