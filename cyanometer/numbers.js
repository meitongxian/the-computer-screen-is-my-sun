let container = document.getElementById('circle');
let radius = 190; // distance from center in px
let total = 53;

placeNumbers();

function placeNumbers() {
    for (let i = 1; i <= total; i++) {
        let angle = (i * (Math.PI * 2 / total) - Math.PI / 2) - (Math.PI / total); // calculate angle starting from top center
        let x = window.innerWidth/2 + Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius - window.innerHeight/2;
        // make each div inside the circle container
        const div = document.createElement('div');
        div.className = 'number';
        div.textContent = i;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        container.appendChild(div);
    }
}

window.addEventListener('resize', () => {
    document.getElementById('circle').innerHTML = ""; // remove all previously placed numbers
    placeNumbers(); // place numbers in new center
});