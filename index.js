const jutaImg = document.querySelector('.juta-img');
const saklainImg = document.querySelector('.saklain-img');
const soundText = document.querySelector('.sound');
const sound = new Audio('./uiMaa.mp3');
let timeoutId = null; // To track the timeout and avoid overlapping changes

// Show the image when the mouse moves
document.addEventListener('mousemove', (e) => {
    // Set the position of the image to follow the cursor
    jutaImg.style.left = `${e.pageX - 100}px`;
    jutaImg.style.top = `${e.pageY - 150}px`;

    // Make sure the image is visible
    jutaImg.style.display = 'block';
});

// Handle click to change and revert the image
document.addEventListener('click', () => {
    // Clear any existing timeout to prevent overlapping operations
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }

    // Change the image source
    saklainImg.src = './images/saklain-after.png';
    soundText.style.display = 'block';
    sound.play();

    // Set a timeout to revert the image source back after 0.5 seconds
    timeoutId = setTimeout(() => {
        saklainImg.src = './images/saklain.png'; 
        soundText.style.display = 'none';
        timeoutId = null; // Reset the timeout tracker
    }, 1000); // 500 milliseconds
});
