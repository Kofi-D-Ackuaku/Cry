document.addEventListener("DOMContentLoaded", function () {
    const spans = document.querySelectorAll("span");
    let delay = 0; // Initial delay

    spans.forEach((span) => {
        // Set a delay for each word
        setTimeout(() => {
            span.classList.add("visible"); // Add the "visible" class to reveal the word
        }, delay);

        // Increase the delay for the next word
        delay += 350; // Adjust the delay (in milliseconds) between words
    });
});