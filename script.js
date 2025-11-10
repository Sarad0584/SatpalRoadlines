document.addEventListener("DOMContentLoaded", function() {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            // This is a simple toggle. We'll need to add CSS to show the menu.
            // For now, let's just log to the console.
            console.log("Hamburger clicked!");
            
            // A real implementation would be:
            // navMenu.classList.toggle("active");
            // And .nav-menu.active in CSS would be display: block;
        });
    }

    // --- Active Nav Link Styling ---
    // This finds the current page and adds the 'active' class to the correct link
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active"); // Ensure others aren't active
        }
    });

    // We can add logic for the tracking form here later.

});
/* ==========
   ADD THIS TO THE BOTTOM OF YOUR EXISTING script.js FILE
   ========== */

// --- Tracking Page Logic ---
document.addEventListener("DOMContentLoaded", function() {
    const trackingForm = document.getElementById("tracking-form");
    const trackingInput = document.getElementById("tracking-input");
    const trackingResults = document.getElementById("tracking-results");
    const sampleLinks = document.querySelectorAll(".sample-link");

    // Function to show the (demo) results
    function showResults() {
        if (trackingResults) {
            trackingResults.classList.remove("hidden");
        }
    }

    // Handle the form submission
    if (trackingForm) {
        trackingForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop the form from actually submitting
            
            // In a real app, you'd fetch data here.
            // For this demo, we'll just show the results if the input isn't empty.
            if (trackingInput.value.trim() !== "") {
                // We could even update the tracking number field
                const resultTrackingNumber = document.getElementById("result-tracking-number");
                if (resultTrackingNumber) {
                    resultTrackingNumber.textContent = trackingInput.value.trim().toUpperCase();
                }
                showResults();
            }
        });
    }

    // Handle clicks on sample numbers
    sampleLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Stop the link from navigating
            
            // Get the sample number text
            const sampleNumber = link.textContent;
            
            // Put it in the input field
            if (trackingInput) {
                trackingInput.value = sampleNumber;
            }
            
            // Show the results
            showResults();

            // Update the tracking number in the results
            const resultTrackingNumber = document.getElementById("result-tracking-number");
            if (resultTrackingNumber) {
                resultTrackingNumber.textContent = sampleNumber;
            }
        });
    });

});
/* ==========
   ADD THIS TO THE BOTTOM OF YOUR EXISTING script.js FILE
   ========== */

// --- Contact Form Logic ---
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop the form from submitting
            
            // In a real app, you would send this data to a server.
            // For now, just show a success message.
            alert("Thank you for your message! We will get back to you soon.");
            
            // Optionally, reset the form
            contactForm.reset();
        });
    }
});