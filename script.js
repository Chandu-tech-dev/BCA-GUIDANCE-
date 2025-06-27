const notes=document.getElementById("btn");
const sep=document.getElementById("sep-btn");
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
sep.addEventListener("click",()=>{
    open("sep.html")
})

let intervalsSet = false;
document.addEventListener("scroll",()=>{
    if (!intervalsSet) {
        intervalsSet = true;
        setTimeout(() => {
            const studentInterval = setInterval(() => {
                student++;
                if (student > 500) {
                    clearInterval(studentInterval);
                } else {
                    students.innerHTML = student + "k";
                }
            }, 50);
            const viewInterval = setInterval(() => {
                viwe++;
                if (viwe > 600) {
                    clearInterval(viewInterval);
                } else {
                    viweers.innerHTML = viwe + "k";
                }
            }, 50);
            const supporterInterval = setInterval(() => {
                supporter++;
                if (supporter > 700) {
                    clearInterval(supporterInterval);
                } else {
                    suppoters.innerHTML = supporter + "k";
                }
            }, 50);
        }, 2000);
    }
});
const textarea=document.getElementById("textarea");
const submit=document.getElementById("suggest");
submit.addEventListener("click",()=>{
   textarea.value="";
})

