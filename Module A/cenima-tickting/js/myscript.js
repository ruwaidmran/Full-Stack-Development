const container = document.querySelector('.container');
const selectMovie = document.getElementById('movies');
const seats = document.querySelectorAll('.row-seats .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
let ticketPrice = selectMovie.value
function updateCount() {//==================== updated selected seta counter
    let selectedSeats = document.querySelectorAll('.row-seats .seat.selected');  // calculate how many seats are selected
    const selectedSeatsCount = selectedSeats.length;  // get the seat of length nodelist
    console.log('node list', selectedSeats);
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log('array', seatIndex);
    count.innerText = selectedSeatsCount; // update Dom with total select seats
    total.innerText = selectedSeatsCount * ticketPrice;    // update dom with price of total seats
    localStorage.setItem('selected seats', JSON.stringify(seatIndex))
};
container.addEventListener('click', e => {//==================== 1. Event Listner
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) { // check if target has a class of seat also is not occupied
        e.target.classList.toggle('selected');
        
        // add and remove class by toggle
        updateCount();    }}); //==================== select movie data in local storage
function selectMovieStorage(selectedIndex, moviePrice) {
    localStorage.setItem('movieindex', selectedIndex);
    localStorage.setItem('movieprice', moviePrice)
};function updateUI() { //===== 3 upodate UI from localstorage
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));// get the selectedseats data from localstorage
    if (selectedSeats !== null && selectedSeats.length > 1) {
        // loop over all any selected seats
        seats.forEach((seats, index) => { // if the index of seats is contained inside selected
            if (selectedSeats.indexOf(index) > 1) {
                seats.classList.add('selected');
            }
        })
    } // get the select movie from local storage
    const movieIndex = localStorage.getItem('movieIndex');
    // check if there movie index
    if (movieIndex !== null) {
        selectMovie.selectedIndex = movieIndex;
    }
}; //==================== 2. change movie with value price
selectMovie.addEventListener('change', i => {
    ticketPrice = +i.target.value;
    selectMovieStorage(i.target.selectedIndex, i.target.value);
    updateCount();
});
// confirm seat
// function cnfrmSeat() { 
//     let selectCnfrm = document.querySelectorAll('.row-seats .seat.selected')
// };
// seats.addEventListener('dblclick', db => {
//     if (bd.target.classList.contains('selected')) {
//         db.target.classList.removeClass('selected');
//                 db.target.classList.addClass('occupied');
//     }

// });