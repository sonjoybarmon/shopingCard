//minus1 button 
const minusButton1 = document.getElementById("minusBtn1");
    minusButton1.addEventListener("click", function(){
const minusInputValue = document.getElementById("inputValue1").value;
const minusInputNumber = parseFloat(minusInputValue);
    if (minusInputNumber == 0){
        let newValue = 00;
        document.getElementById('inputValue1').value = newValue;
    } else {
        let newValue = minusInputNumber - 1;
        document.getElementById('inputValue1').value = newValue;
    } 

const removePrince1 = document.getElementById("currentPrice2").innerText;
const removeNumber1 =parseFloat(removePrince1);
const removeInput1 = document.getElementById("inputValue1").value;
    let newRemoveInput = removeInput1 * 1219;
    document.getElementById("currentPrice1").innerText = newRemoveInput;

const addSubtotal = document.getElementById("subtotal").innerText;
const addSubtotalNumber = parseFloat(addSubtotal);
const subtotalInput1 = document.getElementById("currentPrice1").innerText;
const subtotalInput1Num = parseFloat(subtotalInput1);
const subtotalInput2 = document.getElementById("currentPrice2").innerText;
const inputValue2Num = parseFloat(subtotalInput2);
    let newSubTotal = subtotalInput1Num + inputValue2Num ;
    document.getElementById("subtotal").innerText = newSubTotal;
    document.getElementById("total").innerText = newSubTotal;

});


//minus2 button
const minusButton2 = document.getElementById("minusBtn2").addEventListener("click", function(){
    minusInputValue2 = document.getElementById("inputValue2").value;
    const minusInputValue2Num = parseFloat(minusInputValue2);
    if (minusInputValue2Num == 0) {
        let newValue = 00;
        document.getElementById("inputValue2").value = newValue;
    } else {
        let newValue = minusInputValue2Num - 1 ;
        document.getElementById("inputValue2").value = newValue;
    }

const removePrince2 = document.getElementById("currentPrice2").innerText;
const removeNumber2 = parseFloat(removePrince2);
const removeValue = document.getElementById("inputValue2").value;
    let newValue = removeValue * 59;
    document.getElementById("currentPrice2").innerText = newValue;


const addSubtotal = document.getElementById("subtotal").innerText;
const addSubtotalNumber = parseFloat(addSubtotal);
const subtotalInput1 = document.getElementById("currentPrice1").innerText;
const subtotalInput1Num = parseFloat(subtotalInput1);
const subtotalInput2 = document.getElementById("currentPrice2").innerText;
const inputValue2Num = parseFloat(subtotalInput2);
    let newSubTotal = subtotalInput1Num + inputValue2Num ;
    document.getElementById("subtotal").innerText = newSubTotal;
    document.getElementById("total").innerText = newSubTotal;
});



//plus1 button
const plusButton = document.getElementById("plusBtn1");
    plusButton.addEventListener("click", function(){
const plusInputValue = document.getElementById("inputValue1").value;
const plusInputNumber = parseFloat(plusInputValue);
    let newValue = plusInputNumber + 1;
    document.getElementById("inputValue1").value = newValue;

const currentPrice = document.getElementById("currentPrice1").innerText;
const currentPriceNumber = parseFloat(currentPrice);
const currentValue = document.getElementById("inputValue1").value;
    let newPrice = currentValue * 1219 ;
    document.getElementById("currentPrice1").innerText = newPrice ;





const addSubtotal = document.getElementById("subtotal").innerText;
const addSubtotalNumber = parseFloat(addSubtotal);
const subtotalInput1 = document.getElementById("currentPrice1").innerText;
const subtotalInput1Num = parseFloat(subtotalInput1);
const subtotalInput2 = document.getElementById("currentPrice2").innerText;
const inputValue2Num = parseFloat(subtotalInput2);
    let newSubTotal = subtotalInput1Num + inputValue2Num ;
    document.getElementById("subtotal").innerText = newSubTotal;
    document.getElementById("total").innerText = newSubTotal;

});



//plus2 button

const plusButton2 = document.getElementById("plusBtn2").addEventListener("click", function(){
    const plusInputValue2 = document.getElementById("inputValue2").value;
    const plusInputNumber2 = parseFloat(plusInputValue2);
    let newValue = plusInputNumber2 + 1;
    document.getElementById("inputValue2").value = newValue;

const currentPrice2 =document.getElementById("currentPrice2").innerText;
const currentPrice2Number = parseFloat(currentPrice2);
const currentPrice2Value = document.getElementById("inputValue2").value;
    let newPrice = currentPrice2Value * 59;
    document.getElementById("currentPrice2").innerText = newPrice; 



const addSubtotal = document.getElementById("subtotal").innerText;
const addSubtotalNumber = parseFloat(addSubtotal);
const subtotalInput1 = document.getElementById("currentPrice1").innerText;
const subtotalInput1Num = parseFloat(subtotalInput1);
const subtotalInput2 = document.getElementById("currentPrice2").innerText;
const inputValue2Num = parseFloat(subtotalInput2);
    let newSubTotal = subtotalInput1Num + inputValue2Num ;
    document.getElementById("subtotal").innerText = newSubTotal;
    document.getElementById("total").innerText = newSubTotal;

});

const nextPage = document.getElementById("next_page").addEventListener("click",function(){
    const nonePage = document.querySelector(".cart");
        nonePage.style.display = "none";
    const newPage = document.getElementById("newPage");
     newPage.style.display = "block";
    
    const bodyColor = document.querySelector("body");
        bodyColor.style.background="linear-gradient(90deg ,#87cfebc0, #ffffff)";
});