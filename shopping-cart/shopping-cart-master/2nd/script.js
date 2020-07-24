//Item 1 Increment
const incrementItemBtn1 = document.getElementById("incrementItem1");
incrementItemBtn1.addEventListener("click", function(){
   itemQuantityHandler("quantityOfItem1" , "priceOfItem1" , "increment");
});
//Item 2 Increment
const incrementItemBtn2 = document.getElementById("incrementItem2");
incrementItemBtn2.addEventListener("click", function(){
   itemQuantityHandler("quantityOfItem2" , "priceOfItem2" , "increment");
});
// Item 1 Decrement
const decrementItemBtn1 = document.getElementById("decrementItem1");
decrementItemBtn1.addEventListener("click", function(){
    itemQuantityHandler("quantityOfItem1" , "priceOfItem1" , "decrement");
})
// Item 2 Decrement
const decrementItemBtn2 = document.getElementById("decrementItem2");
decrementItemBtn2.addEventListener("click", function(){
    itemQuantityHandler("quantityOfItem2" , "priceOfItem2" , "decrement");
})
// Item 1 Delete
const itemDeleteBtn1 = document.getElementById("removeItem1");
itemDeleteBtn1.addEventListener("click", function(){
   RemoveItemFromCart("item1", "priceOfItem1")
}) 
// Item 2 Delete
const itemDeleteBtn2 = document.getElementById("removeItem2");
itemDeleteBtn2.addEventListener("click", function(){
   RemoveItemFromCart("item2", "priceOfItem2")
})

//  Item Increment/Decrement Functionality
function itemQuantityHandler(itemQuantityId, itemPriceId , type){
   const itemQuantity = document.getElementById(itemQuantityId).value;
   const newItemQuantity = type == "increment" ? parseFloat(itemQuantity) + 1 : parseFloat(itemQuantity) - 1 ;
   const itemPrice = document.getElementById(itemPriceId).innerText;
   var itemPriceAmount = parseFloat(itemPrice);
   //Containing Original Product price Every time even after changing on dom
   const itemOriginalPrice = itemPriceAmount / itemQuantity;
   // Item Quantity Decrement less then 1 Disabling 
   if(newItemQuantity <= 1){
      document.getElementById(itemQuantityId).value = 1;
      document.getElementById(itemPriceId).innerText = itemOriginalPrice;
   }else{
      document.getElementById(itemQuantityId).value = newItemQuantity;
      const updatedPrice =  itemOriginalPrice * newItemQuantity;
      document.getElementById(itemPriceId).innerText = updatedPrice;
      // DOM Updating to invoice 
      if(itemQuantityId == "quantityOfItem1" ){
         document.getElementById("invoice-item-price1").innerText = itemOriginalPrice;
         document.getElementById("invoice-item-quantity1").innerText = newItemQuantity;
         document.getElementById("invoice-item-total1").innerText = updatedPrice;
      }else if(itemQuantityId == "quantityOfItem2" ){
         document.getElementById("invoice-item-price2").innerText = itemOriginalPrice;
         document.getElementById("invoice-item-quantity2").innerText = newItemQuantity;
         document.getElementById("invoice-item-total2").innerText = updatedPrice;
      }

  }
  
  // Updating New Total and Subtotal
  updateTotal();
}

// Total/Subtotal Calculation and Update to DOM
function updateTotal(){
   const priceOfItem1 = document.getElementById("priceOfItem1").innerText;
   const priceOfItem2 = document.getElementById("priceOfItem2").innerText;
   const getSubTotal = parseFloat(priceOfItem1) + parseFloat(priceOfItem2);
   document.getElementById('subtotal').innerText = getSubTotal;
   // Adding 5% tax with price Amount
   const tax = getSubTotal * 5 / 100 ;
   document.getElementById('tax').innerText =  tax;
   document.getElementById('total').innerText = getSubTotal + tax;
   document.getElementById("invoice-subtotal").innerText = getSubTotal;
   document.getElementById("invoice-tax").innerText = tax;
   document.getElementById("invoice-total").innerText = getSubTotal + tax;

   // Remove Checkout Button When Total amount is 0
   if(getSubTotal < 1){
      checkOutBtn.style.display ="none";
   }
}

// Functionality for Item Remove
function RemoveItemFromCart(itemId, ItemPriceId){
   document.getElementById(itemId).style.display= "none";
   document.getElementById(ItemPriceId).innerText = 0;
   //Updating on Invoice
   if(itemId == "item1" ){
      document.getElementById("invoice-item1").style.display= "none";
   }else if(itemId == "item2" ){
      document.getElementById("invoice-item2").style.display= "none";
   }
   updateTotal();
}

// Checkout 
const checkOutBtn = document.getElementById('checkoutbtn');
checkOutBtn.addEventListener("click", function(){
   document.getElementById("deliverydetails").classList.remove("d-none");
   document.getElementById("shoppingcart").classList.add("d-none");
})
// Delivery Details Submit 
const deliveryDetailsForm = document.getElementById('deliveryDetailsForm');
deliveryDetailsForm.addEventListener("submit", function(e){
   e.preventDefault();
   // Printing Invoice Customer Details 
   document.getElementById("showCustomerName").innerText = deliveryDetailsForm.customerName.value;
   document.getElementById("showCustomerPhone").innerText = deliveryDetailsForm.customerPhone.value;
   document.getElementById("showCustomerEmail").innerText = deliveryDetailsForm.customerEmail.value;
   document.getElementById("showCustomerAddress").innerText = deliveryDetailsForm.customerAddress.value;

   //Hiding and Showing Elements
   document.getElementById("shoppingcart").classList.add("d-none");
   document.getElementById("deliverydetails").classList.add("d-none");
   document.getElementById("invoice").classList.remove("d-none");
})

// Setting Total and Subtotal on first load
updateTotal();
//Customer Details Form 
