const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const divide = document.getElementById("divide");
const res = document.getElementById("result");
function operations(number1, number2, operation) {
    if (operation === "+") return number1 + number2;
    else if (operation === "-") return number1 - number2;
    else if (operation === '*') return number1 * number2;
    return number1 / number2;
}
add.addEventListener("click", ()=>{
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    res.value = operations(a, b, '+').toString();
});
sub.addEventListener("click", ()=>{
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    res.value = operations(a, b, '-').toString();
});
mul.addEventListener("click", ()=>{
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    res.value = operations(a, b, '*').toString();
});
divide.addEventListener("click", ()=>{
    const a = parseFloat(number1.value);
    const b = parseFloat(number2.value);
    res.value = operations(a, b, '/').toString();
}); //# sourceMappingURL=app.js.map

//# sourceMappingURL=Calculator.088a9467.js.map
