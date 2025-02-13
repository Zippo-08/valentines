function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Check if the device is mobile
function isMobile() {
    return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
    var noButton = document.getElementById('noButton');

    if (isMobile()) {
        // On mobile: Move when the button is tapped
        noButton.addEventListener("click", moveButton);
    } else {
        // On desktop: Move when the cursor hovers over it
        noButton.addEventListener("mouseover", moveButton);
    }
});
