//1 display a number on the text field
function displaynum(num) {
    result.value+=num
}

//2 clear the text field
function clearText() {
    result.value=''
}

//3 evaluate the expression
function calculate() {
    result.value=eval(result.value)
    // or
    // exp=result.value
    // res=eval(exp)
    // result.value=res
}

//4 Remove the last character from the text field
function backSpace() {
    result.value=result.value.slice(0,-1)
}