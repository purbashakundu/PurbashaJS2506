
let display = document.getElementById("display")
let btns = Array.from(document.getElementsByClassName("button"))

btns.forEach(eachBtn => {
    eachBtn.addEventListener("click", (e) => {
       let text = e.target.innerText
       switch(text) {
       case "C":
        display.innerText = ""
        break;
        case "Back":
            if(display.innerText) {
                display.innerText = display.innerText.substring(0, display.innerText.length-1)
            }
            break;
            case "=":
            if(display.innerText == "") {
                alert("No values entered")
            }
else {
     display.innerText = eval(display.innerText)
}
break;
default:
    display.innerText = display.innerText + text
    }
  })
})