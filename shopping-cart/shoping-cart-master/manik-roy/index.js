// first product
const removeFirstProduct = document.getElementById('remove-product');
const product1Price = document.getElementById('product1-price');

const quantity = document.getElementById('first-product-quantity');
removeFirstProduct.addEventListener('click', function() {
    product1Price.innerText = removeProductAndUpdatePrice(product1Price, quantity);
    getSubTotal();
});

// quantity keyboard event
quantity.addEventListener('keyup', function() {
    product1Price.innerText = keyupHandler(quantity, 1219);
    getSubTotal();
});

const addFirstProduct = document.getElementById('add-product');
addFirstProduct.addEventListener('click', function() {
    const getTotalPrice = addProductAndPriceUpdate(product1Price, quantity);
    product1Price.innerText = getTotalPrice;
    getSubTotal();
});

// second product
const removeSecondProduct = document.getElementById('remove-product-second');
const product2Price = document.getElementById('product2-price');
const quantity2 = document.getElementById('second-product-quantity');

// remove second product
removeSecondProduct.addEventListener('click', function() {
    product2Price.innerText = removeProductAndUpdatePrice(product2Price, quantity2);
    getSubTotal();
});

// quantity 2 keyboard event
quantity2.addEventListener('keyup', function() {
    product2Price.innerText = keyupHandler(quantity2, 59);
    getSubTotal();
});

// add product
const addSecondProduct = document.getElementById('add-product-second');
addSecondProduct.addEventListener('click', function() {
    const getTotalPrice = addProductAndPriceUpdate(product2Price, quantity2);
    product2Price.innerText = getTotalPrice;
    getSubTotal();
});

// remove product and update price
function removeProductAndUpdatePrice(price, quantitys) {
    let priceNumber = parseInt(price.innerText);
    let productQuanty = parseInt(quantitys.value);
    if (productQuanty > 1) {
        quantitys.value = productQuanty - 1;
        let singlePrice = priceNumber / productQuanty;
        let total = singlePrice * parseInt(quantitys.value);
        return total;
    }
    return priceNumber;
}

// add  product
function addProductAndPriceUpdate(price, quantitys) {
    let priceNumber = parseInt(price.innerText);
    let productQuanty = parseInt(quantitys.value);
    quantitys.value = productQuanty + 1;
    let singlePrice = priceNumber / productQuanty;
    let total = singlePrice * parseInt(quantitys.value);
    return total;
}

// input keyup handler
function keyupHandler(quantitys, defaultPrice) {
    console.log(quantitys, defaultPrice);
    
    let productQuanty = parseInt(quantitys.value);
    if (productQuanty == 0 || isNaN(productQuanty)) {
        quantitys.value = 1;
        let total = defaultPrice * parseInt(quantitys.value);
        return total;
    }
    let total = defaultPrice * parseInt(quantitys.value);
    return total;
}

// cart total
const subTotal = document.getElementById('sub-total-price');
const totalPrice = document.getElementById('total-price');

function getSubTotal() {
    let total = parseInt(product1Price.innerText) + parseInt(product2Price.innerText);
    subTotal.innerText = total;
    totalPrice.innerText = total;
}

function applyDiscount() {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode.trim() != 'WEAREHERO') {
        alert('Invailde cuopne, use this cuopne: WEAREHERO');
    } else {
        const totalPriceNumber = parseInt(subTotal.innerText);
        let savings = Math.round((totalPriceNumber * 15) / 100);
        let saleprice = totalPriceNumber - savings;
        totalPrice.innerText = saleprice;
        document.getElementById('saving-price').innerText = savings;
        console.log(savings, totalPriceNumber, saleprice);
    }
}
document.getElementById('coupon-apply').addEventListener('click', function() {
    let savings = document.getElementsByClassName('savings');
    for (let i = 0; i < savings.length; i++) {
        savings[i].style.display = 'block';
    }
    applyDiscount();
});

// checkout product
document.getElementById('checkout-product').addEventListener('click', function() {
    document.getElementById('cart-area').style.display = 'none';
    document.getElementById('order-confirm-area').style.display = 'block';
});
