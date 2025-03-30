const notes=document.getElementById("btn");
const web=document.getElementById("web")
const students=document.getElementById("student");
const viweers=document.getElementById("viweers");
const suppoters=document.getElementById("supporters");
let student=0;
let viwe=0;
let supporter=0;
notes.addEventListener("click",()=>{
    open("notes.html");
})

document.addEventListener("scroll",()=>

{
   setTimeout(() => {
    setInterval(Student,100)
    setInterval(View,100)
    setInterval(Suppoter,100)
   }, 2000);
       
       
        
});
function Student(){
    student++;
    if (student>0 && student<501) {
        document.getElementById("student").innerHTML=student+"k";
    }



}
function View(){
    viwe++;
    if(viwe>0&&viwe<601)
    {
        viweers.innerHTML=viwe+"k";
    }
    else{
        clearInterval()
    }
}
function Suppoter(){
    supporter++;
    if(supporter>0&&supporter<701)
    {
        suppoters.innerHTML=supporter+"k";
    }
    else{
        clearInterval()
    }
}

const textarea=document.getElementById("textarea");
const submit=document.getElementById("suggest");
submit.addEventListener("click",()=>{
   textarea.value="";
})

