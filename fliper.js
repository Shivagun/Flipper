let colorred=document.getElementById("Heading").style.color="Blue"
let button =document.getElementById("btn").style.alignItems=("center")
let btn=document.getElementById("btn")
let color=document.getElementById("color")
let wrap=document.getElementById("wrapper")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']






btn.addEventListener("click",function(){
    let hexColor="#"
    for(i=1;i<=6;i++){
        hexColor+=randHexvalue()
    }
    wrap.style.backgroundColor = hexColor
    color.innerHTML=hexColor
})

 


function randHexvalue(){
    let randamIndex=Math.floor(Math.random()*16)
    return hex[randamIndex]

}

