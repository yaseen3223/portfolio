


let html= document.getElementsByClassName("html")
let bootstarp= document.getElementsByClassName("bootstarp")
let projectmain= document.getElementById("projectmain")

function htmlfunction(){
    html[0].style.display="block"
    html[1].style.display="block"
    bootstarp[0].style.display="block"
    bootstarp[1].style.display="block"
    projectmain.scrollIntoView({ behavior: "smooth" });
}
function bootstrapfunc(){
    html[0].style.display="none"
    html[1].style.display="none"
    bootstarp[0].style.display="block"
    bootstarp[1].style.display="block"
    projectmain.scrollIntoView({ behavior: "smooth" });

}

function jsfunc(){
    html[0].style.display="none"
    html[1].style.display="none"
    bootstarp[0].style.display="none"
    bootstarp[1].style.display="none"
    projectmain.scrollIntoView({ behavior: "smooth" });
}




