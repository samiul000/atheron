document.addEventListener("DOMContentLoaded", function() {
    // Modal elements
    var bacteriaModal = document.getElementById("bacteriaModal");
    var squidModal = document.getElementById("squidModal");
    var jellyModal = document.getElementById("jellyModal");
    var tomopterisModal = document.getElementById("tomopterisModal");
    var spongeModal = document.getElementById("spongeModal");

    // Open modal buttons
    var openBacteriaModalBtn = document.getElementById("openBacteriaModalBtn");
    var openSquidModalBtn = document.getElementById("openSquidModalBtn");
    var openJellyModalBtn = document.getElementById("openJellyModalBtn");
    var openTomopterisModalBtn = document.getElementById("openTomopterisModalBtn");
    var openSpongeModalBtn = document.getElementById("openSpongeModalBtn");

    // Close modal buttons
    var bacteriaCloseBtn = document.getElementById("bacteriaCloseBtn");
    var squidCloseBtn = document.getElementById("squidCloseBtn");
    var jellyCloseBtn = document.getElementById("jellyCloseBtn");
    var tomopterisCloseBtn = document.getElementById("tomopterisCloseBtn");
    var spongeCloseBtn = document.getElementById("spongeCloseBtn");

    // Open modals
    openBacteriaModalBtn.onclick = function() {
        bacteriaModal.style.display = "block";
    }

    openSquidModalBtn.onclick = function() {
        squidModal.style.display = "block";
    }

    openJellyModalBtn.onclick = function() {
        jellyModal.style.display = "block";
    }
    
    openTomopterisModalBtn.onclick = function() {
        tomopterisModal.style.display = "block";
    }

    openSpongeModalBtn.onclick = function() {
        spongeModal.style.display = "block";
    }



    // Close modals
    bacteriaCloseBtn.onclick = function() {
        bacteriaModal.style.display = "none";
    }

    squidCloseBtn.onclick = function() {
        squidModal.style.display = "none";
    }

    jellyCloseBtn.onclick = function() {
        jellyModal.style.display = "none";
    }

    tomopterisCloseBtn.onclick = function() {
        tomopterisModal.style.display = "none";
    }

    spongeCloseBtn.onclick = function() {
        spongeModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == bacteriaModal) {
            bacteriaModal.style.display = "none";
        }
        if (event.target == squidModal) {
            squidModal.style.display = "none";
        }
        if (event.target == jellyModal) {
            jellyModal.style.display = "none";
        }
        if (event.target == tomopterisModal) {
            tomopterisModal.style.display = "none";
        }
        if (event.target == spongeModal) {
            spongeModal.style.display = "none";
        }
    }
});

function init() {
    window.location.href = "../microorganism/microorganism.html";
}

function home() {
    window.location.href = "../index.html";
}

function back() {
    window.location.href = "../surface/surface.html";
}