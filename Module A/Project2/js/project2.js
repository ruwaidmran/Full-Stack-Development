// Get element DOM value

const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectMovie = document.getElementById('movie');


// GEt the Ticl=ket price from Drop down movie
const ticketPrice = +selectMovie.value;

function updatecount() {
    // calculate how many seats are selected 
    const selectedSeats = document.querySelector()

};
// event listners 
// 1. listen for  click on container
container.addEventListener('click', e => {
    // Check if target has a class of seat and also not occupied
    if (e.target.classList.contains('seat') && !e.target.classList.contains('.occupied')) {
        // Add and remove for selected class
        e.target.classList.toggle('selected')
            // update the count and select seats 
    }
})