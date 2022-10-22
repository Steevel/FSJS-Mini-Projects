const canvas = document.getElementById('canvas');
const button = document.getElementById('button');

// Generat random color hex code
function generateRandomColor() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16)
    }
    return color
}

// Change background color
button.addEventListener('click', () => {
    let color = generateRandomColor();
    canvas.style.backgroundColor = color;
})