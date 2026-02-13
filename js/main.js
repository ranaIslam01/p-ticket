// Mobile Menu Toggle *****
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuDropdown = document.getElementById('mobile-menu-dropdown');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuDropdown.classList.toggle('hidden');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when a menu item is clicked
const mobileMenuItems = mobileMenuDropdown.querySelectorAll('li');
mobileMenuItems.forEach(item => {
    item.addEventListener('click', function() {
        mobileMenuDropdown.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
    });
});

// but tickets to scroll main section*******
function buyTicket(){
    window.scrollBy(0,1990);
}


// select seat ***********
const selectSeat = document.querySelectorAll('.seat-pattern');
for (const seat of selectSeat) {
    seat.addEventListener('click', function(event){

        const seatSelectColor = event.target;
        const seatName = seatSelectColor.innerText;
        const seatNameToLowerCase = seatName.toLowerCase();
        const pressed = document.getElementById(seatNameToLowerCase);
        pressed.classList.add('selected');

        leftSeat('left-seat');

        selectedSeat('selected-seat');

        showPrice('ticket-and-price-area', seatName, 550);

        // console.log(event.target);
        disabledButton('selected-seat','coupon-input', 'submit-btn');

    })
}

// coupon input*****
document.getElementById('coupon-input').addEventListener('keyup', function(event){
    const couponInputValue = event.target.value;
    const newCoupon = "NEW15";
    const coupleCoupon = "COUPLE20";
    
    if (couponInputValue.toLowerCase() === newCoupon.toLowerCase()) {
        offerPriceNewCoupon('total-price', 'grand-price');
        addInvalidCouponCode('apply-button', 'alert-text');
    }
    else if(couponInputValue.toLowerCase() === coupleCoupon.toLowerCase()){
        offerPriceCoupleCoupon('total-price', 'grand-price');
        addInvalidCouponCode('apply-button', 'alert-text');
    }
    else{
        removeInvalidCouponCode('apply-button', 'alert-text');
    }
})

// modal section and submit button**
function submit(){
    // const modal = document.getElementById('modal');
    // modal.classList.remove('hidden');

    Swal.fire({
    title: `<div>
        <span style="font-size: 1.875rem; font-weight: 600; color: #27AE60;">Success</span>
        <p style="font-size: 1rem; font-weight: 500; color: #333; line-height: 1.6;">
            Thank you for Booking Our Bus Seats. We are working hard to find the best service and deals for you. 
            <span style="font-weight: 400;">Shortly you will find a confirmation in your email.</span>
        </p>
        </div>`,
        icon: "success",
        draggable: true,
        confirmButtonText: "Continue",
        width: 600,
        padding: '2rem',
        buttonsStyling: false, 
        customClass: {
            confirmButton: 'bg-[#27AE60] text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-[#219150] transition-all'
        }
    });



}
