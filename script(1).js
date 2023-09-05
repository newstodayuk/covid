
const closePopupButton = document.getElementById('closePopup');
const closeButton = document.getElementById('closeButton');
const popupContainer = document.getElementById('popupContainer');

function openPopup() {
    popupContainer.style.display = 'flex';
}

function closePopup() {
    popupContainer.style.display = 'none';
}

function zoomInOut() {
    popupContainer.style.transform = 'translate(-50%, -50%) scale(1.1)';
    setTimeout(() => {
        popupContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        zoomInOut(); // Repeating the zoom effect
    }, 2000);
}

function preventPropagation(event) {
    event.stopPropagation();
}

function openLink() {
    // This function can be used to open a link when the popup image is clicked
    window.open('https://example.com', '_blank');
}

function autoOpenPopup() {
    setTimeout(() => {
        openPopup();
        zoomInOut(); // Start zooming in and out
    }, 3000); // Open popup 5 seconds after page load
}

autoOpenPopup(); // Open popup after page load

closeButton.addEventListener('click', () => {
    closePopup();
});