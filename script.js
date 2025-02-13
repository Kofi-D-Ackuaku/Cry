document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById("body");
    const spans = document.querySelectorAll("span");

    // Create a new Image object to preload the background image
    const bgImage = new Image();
    bgImage.src = "kiwihug-qv05FvdE26k-unsplash.jpg"; // Replace with your image path

    // Wait for the background image to load
    bgImage.onload = function () {
        // Once the image is loaded, start the text animation
        let delay = 0; // Initial delay

        spans.forEach((span) => {
            // Set a delay for each word
            setTimeout(() => {
                span.classList.add("visible"); // Add the "visible" class to reveal the word
            }, delay);

            // Increase the delay for the next word
            delay += 300; // Adjust the delay (in milliseconds) between words
        });
    };

    // Handle image loading errors (optional)
    bgImage.onerror = function () {
        console.error("Failed to load the background image.");
    };
});
