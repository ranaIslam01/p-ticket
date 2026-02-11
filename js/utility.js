function leftSeat(element){
    const leftSeat = document.getElementById(element);
    const leftSeatInnerText = leftSeat.innerText;
    const leftSeatToNumber = parseInt(leftSeatInnerText);
    // console.log(leftSeatToNumber);
    
    const returnValue = leftSeatToNumber - 1;  
    leftSeat.innerText = returnValue;
}



function selectedSeat(element){
    const selectSeat = document.getElementById(element);
    const selectedSeatInnerText = selectSeat.innerText;
    const selectedSeatToNumber = parseInt(selectedSeatInnerText);
    // console.log(selectedSeatToNumber);
    const returnValue = selectedSeatToNumber + 1;
    selectSeat.innerText = returnValue;
}

function showPrice(elementId, innerText, price){
    const priceArea = document.getElementById(elementId);

    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center','px-3','py-1');
    priceArea.appendChild(div);

    
    const p = document.createElement('p');
    p.innerText = innerText;
    
    const p2 = document.createElement('p');
    p2.innerText = 'economy';
    
    const p3 = document.createElement('p');
    p3.innerText = price;
    
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3); 

    const oldPrice = document.getElementById('total-price');
    const oldPriceInnerText = oldPrice.innerText;
    const oldPriceToNumber = parseInt(oldPriceInnerText);
    const priceToNumber = parseInt(p3.innerText);
    const newPrice = oldPriceToNumber + priceToNumber;
    // console.log(newPrice);
    oldPrice.innerText = newPrice; 

    const grandPrice = document.getElementById('grand-price');
    grandPrice.innerText = newPrice;
}

// disabled input*******
function disabledButton(elementId, elementId2, elementId3, elementId4){
    const selectedSeat = document.getElementById(elementId);
    const selectedSeatInnerText = selectedSeat.innerText;
    const selectedSeatToNumber = parseInt(selectedSeatInnerText);

    const disabledInput = document.getElementById(elementId2);

    const disabledButton = document.getElementById(elementId3);

    if (selectedSeatToNumber === 4) {
        disabledInput.removeAttribute('disabled');
    }
    else if(selectedSeatToNumber === 1){
        document.getElementById('number-input').addEventListener('keyup', function(event){
            const value = event.target.value;
            const valueToNumber = parseInt(value);
            if (typeof valueToNumber === 'number') {
                disabledButton.removeAttribute('disabled');
            } 
        })
    }
}


// offer price with new15 coupon******

function offerPriceNewCoupon(elementId, elementId2){
    const totalPrice = document.getElementById(elementId);
    const totalPriceInnerText = totalPrice.innerText;
    const totalPriceToNumber = parseInt(totalPriceInnerText);

    const disCountPrice = totalPriceToNumber - (totalPriceToNumber * 15 / 100);
    const offerPrice = totalPriceToNumber - disCountPrice;

    document.getElementById('apply-button').addEventListener('click', function(){
        const grandPrice = document.getElementById(elementId2);
        grandPrice.innerText = disCountPrice;

        const disCountArea = document.getElementById('discount-area');
        const p = document.createElement('p');
        p.innerText = 'Discount price';
        disCountArea.appendChild(p);
        const p2 = document.createElement('p');
        p2.innerText = `BDT ${offerPrice}`;
        disCountArea.appendChild(p2);

        const couponAreaHidden = document.getElementById('coupon-area-hidden');
        couponAreaHidden.classList.add('hidden');
    })
}

// offer price with couple20 coupon******

function offerPriceCoupleCoupon(elementId, elementId2){
    const totalPrice = document.getElementById(elementId);
    const totalPriceInnerText = totalPrice.innerText;
    const totalPriceToNumber = parseInt(totalPriceInnerText);

    const disCountPrice = totalPriceToNumber - (totalPriceToNumber * 20 / 100);
    const offerPrice = totalPriceToNumber - disCountPrice;

    document.getElementById('apply-button').addEventListener('click', function(){
        const grandPrice = document.getElementById(elementId2);
        grandPrice.innerText = disCountPrice;

        const disCountArea = document.getElementById('discount-area');
        const p = document.createElement('p');
        p.innerText = 'Discount price';
        disCountArea.appendChild(p);
        const p2 = document.createElement('p');
        p2.innerText = `BDT ${offerPrice}`;
        disCountArea.appendChild(p2);

        const couponAreaHidden = document.getElementById('coupon-area-hidden');
        couponAreaHidden.classList.add('hidden');
    })
}

// invalid coupon code ****
function removeInvalidCouponCode(elementId, elementId2){
    document.getElementById(elementId).addEventListener('click', function(){
        const alertText = document.getElementById(elementId2);
        alertText.classList.remove('hidden');
    })
}
function addInvalidCouponCode(elementId, elementId2){
    document.getElementById(elementId).addEventListener('click', function(){
        const alertText = document.getElementById(elementId2);
        alertText.classList.add('hidden');
    })
}