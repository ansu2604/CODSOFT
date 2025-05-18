let buffer="0";
let runningtotal= 0;
let previousoperator;
const screen= document.querySelector(".screen")
function buttonclick(value){
    if(isNaN(parseInt(value))){
        handlesymbol(value);
    }else{
        handlenumber(value);
    }
    rerender()
}
function handlenumber(number){
          if(buffer==="0"){
            buffer=number;
          }else{
            buffer=buffer+number;
          }
          console.log(buffer);
}
function handlemath(value){
     if(buffer===0){
        //do nothing
        return;
     }


     const intbuffer=parseInt(buffer);
     if(runningtotal===0){
        runningtotal=intbuffer;
     }else{
        flushoperation(intbuffer);
     }

     previousoperator=value;
     buffer='0';
     
}
function flushoperation(intbuffer){
    switch(previousoperator){
        case '+':
            runningtotal=runningtotal+intbuffer;
            break;
        case '-':
            runningtotal=runningtotal-intbuffer;
            break;
        case 'x':
            runningtotal=runningtotal*intbuffer;
            break;
        case '÷':
            runningtotal=runningtotal/intbuffer;
            break;
        }
}
function handlesymbol(symbol){
       switch(symbol){
        case 'C':
            buffer="0";
            break;
        case "=":
            if(previousoperator=== null)
            {
               return; 
            }
            flushoperation(parseInt(buffer));
            previousoperator=null;
            buffer= "" + runningtotal;
            runningtotal=0;
             break;
        case "←":
            if(buffer.length===1){
                buffer='0';
            }else{
                buffer=buffer.substring(0,buffer.length-1);
            }
            break;
       case "+":
        handlemath(symbol);
        break;
       case "-":
        handlemath(symbol);
        break;
       case  "÷":
        handlemath(symbol);
        break;
       case  "x":
        handlemath(symbol);
        break;
        handlemath(symbol);
        break;
       }
}
function init(){
    document
    .querySelector('.calc-buttons')
    .addEventListener("click",function(event){
        buttonclick(event.target.innerText);
    });

 }
 function rerender(){
    screen.innerText= buffer;
 }

init();