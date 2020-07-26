const nextPage = document.getElementById("next_page").addEventListener("click",function(){
    const nonePage = document.querySelector(".cart");
        nonePage.style.display = "none";
    const newPage = document.getElementById("newPage");
     newPage.style.display = "block";
    
    const bodyColor = document.querySelector("body");
        bodyColor.style.background="linear-gradient(90deg ,#87cfebc0, #ffffff)";
});
//phone-increase handler 
document.getElementById('phone-increase').addEventListener('click', function(){
    // handlePhoneChange(true);
    handleProductChange('phone', true);
});
// phone-decrease handler function
document.getElementById('phone-decrease').addEventListener('click',function(){
    // handlePhoneChange(false);
    handleProductChange('phone', false);
});
//case-increase handler 
document.getElementById('case-increase').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-count').value;
    // const caseCount = parseInt(caseInput);
    // const caseNewCount = caseCount + 1;
    // document.getElementById('case-count').value = caseNewCount;
    // const caseTotal = caseNewCount * 59 ;
    // document.getElementById('case-total').innerText = caseTotal ;
    handleProductChange('case',true);
});
// case-decrease handler function
document.getElementById('case-decrease').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-count').value;
    // const caseCount = parseInt(caseInput);
    // const caseNewCount = caseCount - 1;
    // document.getElementById('case-count').value = caseNewCount ;
    // const caseTotal = caseNewCount * 59 ;
    // document.getElementById('case-total').innerText = caseTotal ;
    handleProductChange('case', false);
});
// //phone inIncrease function
// function handlePhoneChange(inIncrease){
//     const phoneInput = document.getElementById('phone-count').value;
//     const phoneCount = parseInt(phoneInput);
//     let phoneNewCount = phoneCount;
//     if (inIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     } if(inIncrease == false && phoneCount > 0 ) {
//         phoneNewCount = phoneCount - 1;  
//     }
//     document.getElementById('phone-count').value = phoneNewCount ;
//     const caseTotal = phoneNewCount * 1219 ;
//     document.getElementById('phone-total').innerText = caseTotal ;
// }
// //case inIncrease function
// function handleProductChange(inIncrease){
//     const caseInput = document.getElementById('case-count').value;
//     const caseCount = parseInt(caseInput);
//     let caseNewCount = caseCount;
//     if (inIncrease == true) {
//         caseNewCount = caseCount + 1;
//     } if(inIncrease == false && caseCount > 0 ) {
//         caseNewCount = caseCount - 1;  
//     }
//     document.getElementById('case-count').value = caseNewCount ;
//     const caseTotal = caseNewCount * 59 ;
//     document.getElementById('case-total').innerText = caseTotal ;
// }
//case inIncrease function
function handleProductChange(product ,inIncrease){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (inIncrease == true) {
        productNewCount = productCount + 1;
    } if(inIncrease == false && productCount > 0 ) {
        productNewCount = productCount - 1;  
    }
    productInput.value = productNewCount ;
    // const productTotal = productNewCount * 59 ;
    let productTotal = 0 ;
    if(product == 'phone'){
        productTotal = productNewCount * 1219 ;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59 ;
    }
    document.getElementById(product + '-total').innerText = productTotal ;
    calculatorTotal() // calculator function
};
//calculator all set function
function calculatorTotal(){
    // const phoneInput = document.getElementById('phone-count');
    // const phoneCount = parseInt(phoneInput.value);
    const phoneCount = getInputValue('phone');
    // const caseInput = document.getElementById('case-count');
    // const caseCount = parseInt(caseInput.value);
    const caseCount = getInputValue('case');
    const totalCount = phoneCount * 1219 + caseCount * 59 ;
    const taxAmount =Math.round(totalCount * 0.1);
    document.getElementById('tax').innerText = taxAmount;
    const total = totalCount + taxAmount;

    document.getElementById('Sub-total').innerText = totalCount ;
    document.getElementById('total').innerText = total ;
};
//getInputValue function
function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}