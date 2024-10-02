// GET DOM ELEMENT

const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const selectMovie = document.getElementById('movie');

// get selected movie price from dropdown

const ticketPrice = +selectMovie.value;

// console.log(typeof ticketPrice);



// container.addEventListener('click', e => {
//     console.log(e.target);

// })

// event listners 
// listen for check click on container
container.addEventListener('click', e => {
    // console.log(e.target.classList.contains('seat'));
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

    }

})