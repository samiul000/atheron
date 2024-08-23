document.addEventListener("DOMContentLoaded", function() {
    // Modal elements
    var aboutModal = document.getElementById("aboutModal");
    var planetModal = document.getElementById("planetModal");

    // Open modal buttons
    var openAboutModalBtn = document.getElementById("openAboutModalBtn");
    var openPlanetModalBtn = document.getElementById("openPlanetModalBtn");

    // Close modal buttons
    var aboutCloseBtn = document.getElementById("aboutCloseBtn");
    var planetCloseBtn = document.getElementById("planetCloseBtn");

    // Open modals
    openAboutModalBtn.onclick = function() {
        aboutModal.style.display = "block";
    }

    openPlanetModalBtn.onclick = function() {
        planetModal.style.display = "block";
    }

    // Close modals
    aboutCloseBtn.onclick = function() {
        aboutModal.style.display = "none";
    }

    planetCloseBtn.onclick = function() {
        planetModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == aboutModal) {
            aboutModal.style.display = "none";
        }
        if (event.target == planetModal) {
            planetModal.style.display = "none";
        }
    }
});

// Link the next page
function init() {
    window.location.href = "surface/surface.html";
}
