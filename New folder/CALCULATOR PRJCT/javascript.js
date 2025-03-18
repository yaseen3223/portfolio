let inputText= document.getElementById("inputText")

function display(val){
    inputText.value+=val

    
}

function clearBtn(){
    inputText.value=""

}
function deleteOne(){
 inputText.value=inputText.value.slice(0,-1);   
}
document.getElementById("equalBtn").addEventListener('click',function(){
    inputText.value=eval(inputText.value)
    
})


document.getElementById("zeroBtn").addEventListener('click',function(){
    if(inputText.value  === "0" || inputText.value === null){
       inputText.value=""
       alert`enter a valid number`
    } 
})



