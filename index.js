// Your code here

function moveDodgerRight() {
    const leftNum=dodger.style.left.replace("px","");
    const left=parseInt(leftNum,10);
    if (left>0) {
        dodger.style.left=`${left+1}px`;}
    
};


function moveDodgerLeft() {
    const leftNum=dodger.style.left.replace("px","");
    const left=parseInt(leftNum,10);
    if (left>0) {
        dodger.style.left=`${left-1}px`;}
    
};

document.addEventListener("keydown",function(event){
    if (event.key==="arrowRight"){
        moveDodgerRigt();
    }else if (event.key==="arrowLeft"){moveDodgerLeft()}
})

