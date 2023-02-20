let arrow = document.getElementById("arrow");

 onscroll = ()=>{
    if(scrollY > 450){
        arrow.style.display = "block";
    }else{
        arrow.style.display = "none";
    }
}

arrow.onclick = ()=>{
    scroll ({
        top : 0 ,
        behavior : "smooth",
    })
}
