const circles = document.querySelectorAll('.circle');
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
let currentActive = 0;
circles.forEach((circle, i) => circle.addEventListener('click', () => {
    currentActive = i;
    circles.forEach((circle, id) => {
        if (id <= currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
}));