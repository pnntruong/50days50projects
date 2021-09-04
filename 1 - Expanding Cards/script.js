let cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', (e) => 
        {
            removeActive();
            e.target.classList.add('active');
            console.log(e.target)
        }
    )
})

function removeActive() {
    cards.forEach(card => card.classList.remove('active'));
}
