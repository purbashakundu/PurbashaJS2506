let display = document.getElementById("display")
function clearDisplay() {
display.innerText = ""
}

function addNewCharacter(newChar) {
    display.innerText = display.innerText + newChar
}

function deleteCharacter(){
if(display.innerText){
    display.innerText = display.innerText.substring(0, display.innerText. length-1 )
}
} 

function changeSign(){
if(display.innerText.charAt(0) == "+"){ 
    display.innerText= display.innerText.substring(1)
    } else {
   display.innerText= "-" + display.innerText.substring(0)
    }
}


function checkIsNum(){
    let temp = display.innerText
    for(let i=0; i < temp.length; i++) {
        let eachChar = temp.charAt(i)
        
        if (eachChar < "0" || eachChar > "9"){
        if(eachChar != "/"
        && eachChar != "+"
        && eachChar !="*"
        && eachChar !="-"
        && eachChar !="."
        && eachChar !="("
        && eachChar !=")" ) {
         
            alert("Invalid Entry")
            return false;

        }
    }
} return true
}

function comp(){
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No values entered") 
        }else {
            console.log(display.innerText)
    display.innerText = eval(display.innerText)
        }
}
}
function sqrt() {
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No value provided") 
        }else {
    display.innerText = Math.sqrt(display.innerText, 2)
        }
    }
    
    }

function sq() {
if(checkIsNum) {
    if(display.innerText =="") {
   alert("No value provided") 
    }else {
display.innerText = Math.pow(display.innerText, 2)
    }
}

}


function exp() {
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No value provided") 
        }else {
    display.innerText = Math.exp(display.innerText, 2)
        }
    }

}

function logarithimic(){
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No value provided") 
        }else {
    display.innerText = Math.log(display.innerText, 2)
        }
    }

}

function cos(){
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No value provided") 
        }else {
    display.innerText = Math.cos(display.innerText, 2)
        }
}
}
function sin(){
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No value provided") 
        }else {
    display.innerText = Math.sin(display.innerText, 2)
        }

}
}

function tan(){
    if(checkIsNum) {
        if(display.innerText =="") {
       alert("No value provided") 
        }else {
    display.innerText = Math.tan(display.innerText, 2)
        }

}


}
