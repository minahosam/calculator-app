const number1=document.getElementById("number1") as HTMLInputElement
const number2=document.getElementById("number2") as HTMLInputElement
const add = document.getElementById("add") as HTMLButtonElement
const sub = document.getElementById("sub") as HTMLButtonElement
const mul = document.getElementById("mul") as HTMLButtonElement
const divide = document.getElementById("divide") as HTMLButtonElement
const res = document.getElementById("result") as HTMLOutputElement

function operations(number1:number,number2:number,operation:string):number{
    if(operation === "+"){
        return number1 + number2
    }
    else if(operation === "-"){
        return number1 - number2
    }
    else if (operation === '*'){
        return number1 * number2

    }
    return number1 / number2
}
add.addEventListener("click",()=>{
    const a = parseFloat(number1.value)
    const b = parseFloat(number2.value)
    res.value =operations(a,b,'+').toString()
})
sub.addEventListener("click",() => {
    const a = parseFloat(number1.value)
    const b = parseFloat(number2.value)
    res.value = operations(a,b,'-').toString()
})

mul.addEventListener("click",() => {
    const a = parseFloat(number1.value)
    const b = parseFloat(number2.value)
    res.value = operations(a,b,'*').toString()
})

divide.addEventListener("click",() => {
    const a = parseFloat(number1.value)
    const b = parseFloat(number2.value)
    res.value = operations(a,b,'/').toString()
})