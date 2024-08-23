document.addEventListener('DOMContentLoaded', () => {
    const materials = document.querySelector('.materials');
    const byProducts = document.querySelector('.by-products');
    const explosion = document.querySelector('.explosion');
    const modal = document.getElementById("aboutModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];

    
    if (materials && byProducts && explosion && modal && btn && span) {

        function startAnimation() {
            
            materials.style.display = 'flex';
            byProducts.style.display = 'none';
            explosion.style.display = 'none';

            // Material animation
            materials.classList.add('animate-materials');

            // Explosion animation
            setTimeout(() => {
                materials.style.display = 'none'; // Hide materials after animation
                explosion.style.display = 'block'; // Show explosion
                explosion.classList.add('explode'); // Trigger explosion animation

                // Products animation
                setTimeout(() => {
                    explosion.style.display = 'none'; // Hide explosion
                    byProducts.style.display = 'flex'; // Show by-products
                    byProducts.classList.add('animate-products');

                    // Restart the sequence
                    setTimeout(() => {
                        materials.classList.remove('animate-materials');
                        byProducts.classList.remove('animate-products');
                        explosion.classList.remove('explode');
                        startAnimation(); 
                    }, 4000); // Adjust duration of both animation
                }, 500); // Duration of explosion animation
            }, 4000); // Duration of materials animation
        }

        
        startAnimation();

        // Modal functionality
        
        // Open modal 
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // Close modal 
        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("One or more elements are missing in the DOM.");
    }
});

function init() {
    window.location.href = "../index.html";
}

function back() {
    window.location.href = "../sea/sea.html"
}
