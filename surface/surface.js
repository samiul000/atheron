document.addEventListener("DOMContentLoaded", function() {
    // Modal elements
    var atmosModal = document.getElementById("atmosModal");
    var surfaceModal = document.getElementById("surfaceModal");
    var oceanModal = document.getElementById("oceanModal");

    // Open modal buttons
    var openAtmosModalBtn = document.getElementById("openAtmosModalBtn");
    var openSurfaceModalBtn = document.getElementById("openSurfaceModalBtn");
    var openOceanModalBtn = document.getElementById("openOceanModalBtn");

    // Close modal buttons
    var atmosCloseBtn = document.getElementById("atmosCloseBtn");
    var surfaceCloseBtn = document.getElementById("surfaceCloseBtn");
    var oceanCloseBtn = document.getElementById("oceanCloseBtn");

    // Open modals
    openAtmosModalBtn.onclick = function() {
        atmosModal.style.display = "block";
    }

    openSurfaceModalBtn.onclick = function() {
        surfaceModal.style.display = "block";
    }

    openOceanModalBtn.onclick = function() {
        oceanModal.style.display = "block";
    }

    // Close modals
    atmosCloseBtn.onclick = function() {
        atmosModal.style.display = "none";
    }

    surfaceCloseBtn.onclick = function() {
        surfaceModal.style.display = "none";
    }

    oceanCloseBtn.onclick = function() {
        oceanModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == atmosModal) {
            atmosModal.style.display = "none";
        }
        if (event.target == surfaceModal) {
            surfaceModal.style.display = "none";
        }
        if (event.target == oceanModal) {
            oceanModal.style.display = "none";
        }
    }
});

// Link the next page
function explore() {
    window.location.href = "../sea/sea.html";
}

function home() {
    window.location.href = "../index.html";
}
