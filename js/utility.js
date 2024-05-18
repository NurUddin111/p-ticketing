document.getElementById('driver-seat').addEventListener('click', function () {
    return alert("Sorry! You can't book the driver seat.")
})


function changeBG(buttonId) {
    let btn = document.getElementById(buttonId);
    btn.classList.remove("bg-[#b9bcbc]");
    btn.classList.add("bg-[#1DD100]");
}

let seatCollection = [];
let seatLeft = 40;
let totalPrice = 0;
let totalSeats = 0;
let totalDiscount = 0;
let grandTotal = 0;

function addSeat(buttonId) {


    if (seatCollection.includes(buttonId)) {
        return alert("Sorry! Already BookedPlease select a different seat.")
    } else if (seatCollection.length >= 4) {
        return alert("Sorry! You can't book more than 4 seats.")
    } else {
        changeBG(buttonId);
        let perSeatDetails = document.createElement("div");
        perSeatDetails.setAttribute("class", "flex justify-between items-center");
        let commonClass = "text-base text-[#4a5757] font-semibold";
        let seatName = document.createElement("p");
        seatName.setAttribute("class", commonClass);
        seatName.innerText = document.getElementById(buttonId).innerText;
        let seatClass = document.createElement("p");
        seatClass.setAttribute("class", commonClass);
        seatClass.innerText = "Economy";
        let seatPrice = document.createElement("p");
        seatPrice.setAttribute("class", commonClass);
        seatPrice.innerText = "550";

        perSeatDetails.appendChild(seatName);
        perSeatDetails.appendChild(seatClass);
        perSeatDetails.appendChild(seatPrice);

        let allSeats = document.getElementById("seat-list");
        allSeats.appendChild(perSeatDetails);

        seatCollection.push(buttonId);

        seatLeft = seatLeft - 1;
        document.getElementById('seat-left').innerText = seatLeft;

        totalPrice = totalPrice + 550;
        document.getElementById("total-price").innerText = totalPrice;

        totalSeats = totalSeats + 1;
        document.getElementById('total-seats').innerText = totalSeats;
    }

    if (totalSeats == 4) {
        document.getElementById("coupon-box").classList.remove('hidden')
    }

    // if( totalSeats >= 1 && nameField == '' && numberField == '' ){
    //     document.getElementById("btn-next").classList.remove('btn-disabled')
    //     document.getElementById("btn-next").classList.add('bg-[#1DD100]')  
    // }

}

document.getElementById('coupon').addEventListener('keyup', function () {

    let input = document.getElementById("coupon").value;

    if (input == "NEW15") {
        document.getElementById("apply-coupon-btn").addEventListener('click', function () {
            document.getElementById('coupon-box').classList.add('hidden');
            document.getElementById('discount-section').classList.remove('hidden');
            totalDiscount = totalPrice * 0.15;
            document.getElementById('discount').innerText = totalDiscount;
            grandTotal = totalPrice - totalDiscount;
            document.getElementById('grand-total-section').classList.remove('hidden');
            document.getElementById('grand-total').innerText = grandTotal;

        })
    } else if (input === "Couple20") {
        document.getElementById("apply-coupon-btn").addEventListener('click', function () {
            document.getElementById('coupon-box').classList.add('hidden');
            document.getElementById('discount-section').classList.remove('hidden');
            totalDiscount = totalPrice * 0.2;
            document.getElementById('discount').innerText = totalDiscount;
            grandTotal = totalPrice - totalDiscount;
            document.getElementById('grand-total-section').classList.remove('hidden');
            document.getElementById('grand-total').innerText = grandTotal;

        })
    }
    else {
        document.getElementById("apply-coupon-btn").addEventListener('click', function () {
            return alert("Invalid Coupon Code")
        })
    }
})



document.getElementById('phone-number').addEventListener('keyup', function () {
    let phoneNumber = document.getElementById('phone-number').value;

    if (totalSeats >= 1 && phoneNumber !== '') {
        document.getElementById('btn-next').classList.remove('btn-disabled');
        document.getElementById('btn-next').classList.add('bg-[#1DD100]');
    }
    
    if (phoneNumber == '') {
        document.getElementById('btn-next').classList.remove('bg-[#1DD100]');
        document.getElementById('btn-next').classList.add('btn-disabled');
    }
})







