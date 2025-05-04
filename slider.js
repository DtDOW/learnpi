document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.HPSlider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let slideIndex = 0;  // Start at the first slide

    // Move the slider to the specific slide
    function moveToSlide(index) {
        if (index < 0) {
            slideIndex = totalSlides - 1;  // Go to the last slide
        } else if (index >= totalSlides) {
            slideIndex = 0;  // Go to the first slide
        } else {
            slideIndex = index;
        }
        // Update the transform property to move the slider to the correct position
        slider.style.transform = `translateX(-${slideIndex * 100}vw)`;  // Move slider
    }

    // Auto move the slider every 3 seconds
    function autoMoveSlider() {
        slideIndex = (slideIndex + 1) % totalSlides;  // Increment and loop back
        moveToSlide(slideIndex);
    }

    setInterval(autoMoveSlider, 5000);  // Move every 3 seconds

    // Add event listeners for buttons
    document.getElementById('nextBtn').addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % totalSlides;  // Go to next slide
        moveToSlide(slideIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;  // Go to previous slide
        moveToSlide(slideIndex);
    });
});


