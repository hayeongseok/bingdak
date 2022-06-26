var div = document.querySelector('.instagram_post');
 
function move(){

    var curIndex = 0;

    setInterval(function(){
        div.style.transition = '0.25s';
        div.style.transform = "translate3d(-"+317*(curIndex+1)+"px, 0px, 0px)";

        curIndex++;

        // if(curIndex === 4){
        //     curIndex = -1;
        // }

    },1000);
}

document.addEventListener("DOMContentLoaded",function(){
    move();
});