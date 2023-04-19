const carTitleH1 = document.querySelector('.tesla-model-name');
const carTitleDescription = document.querySelector('.car-description-main-fadein');

// Inventory and Order buttons
const inventoryButton = document.querySelector('.btn-inventory'); 
const orderButton = document.querySelector('.btn-order'); 

// Init Car Title and Sub-title for fade + transform transitions
carTitleH1.classList.add('fade')
carTitleDescription.classList.add('fade');

// Init buttons for fade in
inventoryButton.classList.add('fade')
orderButton.classList.add('fade');

carTitleH1.style.transform = "translateY(20px)";
carTitleDescription.style.transform = "translateX(40px)";

inventoryButton.style.transform = "translateX(-60px)";
orderButton.style.transform = "translateX(60px)";


// Translate all elems back to normal on page load
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
        carTitleH1.classList.remove('fade');
        carTitleH1.style.transform = "translateY(0px)";

        carTitleDescription.classList.remove('fade');
        carTitleDescription.style.transform = "translateX(0px)";

        inventoryButton.classList.remove('fade');
        inventoryButton.style.transform = "translateX(0px)";

        orderButton.classList.remove('fade');
        orderButton.style.transform = "translateX(0px)";
    }, 330);
});

// Smooth scroll between sections with arrow keys
window.addEventListener("keydown", (e) => {
    let scrollY = window.pageYOffset;
    let pHeight = window.innerHeight;
    
    var key = e.key;

    e.preventDefault();

    // Scroll DOWN
    if (key === "ArrowDown") {
        if (scrollY < pHeight) {
            document.getElementById('section-car-2').scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrollY >= pHeight && scrollY < pHeight * 2) {
            document.getElementById('section-car-3').scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrollY >= pHeight * 2 && scrollY < pHeight * 3) {
            document.getElementById('section-car-4').scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrollY >= pHeight * 3 && scrollY < pHeight * 4) {
            document.getElementById('section-car-5').scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    // Scroll UP
    else if (key === "ArrowUp") {
        if (scrollY >= pHeight && scrollY < pHeight * 2) {
            document.getElementById('section-car-1').scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrollY >= pHeight * 2 && scrollY < pHeight * 3) {
            document.getElementById('section-car-2').scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrollY >= pHeight * 3 && scrollY < pHeight * 4) {
            document.getElementById('section-car-3').scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrollY >= pHeight * 4 && scrollY <= pHeight * 5) {
            document.getElementById('section-car-4').scrollIntoView({
                behavior: "smooth"
            });
        }
    }

})

// Change model name when scrolling down
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    let pHeight = window.innerHeight;

    carTitleH1.style.transition - "all 2s";

    switch (true) {

        /* PAGE 1 */
        case scrollY < (pHeight * 0.8):
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model S";
            carTitleH1.style.color = "white";
            break;
        case scrollY > (pHeight * 0.8) && scrollY < (pHeight * 0.9):
            carTitleH1.style.opacity = 0;
            break;

        /* PAGE 2 */
        case scrollY > (pHeight * 0.9) && scrollY < ((pHeight * 2) * 0.8): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model 3";
            carTitleH1.style.color = "white";
            break;
        case scrollY > ((pHeight * 2) * 0.8) && scrollY < ((pHeight * 2) * 0.9): 
            carTitleH1.style.opacity = "0";
            break;

        /* PAGE 3 */
        case scrollY > ((pHeight * 2) * 0.9) && scrollY < ((pHeight * 3) * 0.8): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model X";
            carTitleH1.style.color = "white";
            break;
        case scrollY > ((pHeight * 3) * 0.8) && scrollY < ((pHeight * 3) * 0.9): 
            carTitleH1.style.opacity = "0";
            break;
        
        /* PAGE 4 */
        case scrollY > ((pHeight * 3) * 0.9) && scrollY < ((pHeight * 4) * 0.8): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model Y";
            carTitleH1.style.color = "white";
            break;
        case scrollY > ((pHeight * 4) * 0.8) && scrollY < ((pHeight * 4) * 0.9): 
            carTitleH1.style.opacity = "0";
            break;

        /* PAGE 5 */
        case scrollY > ((pHeight * 4) * 0.95): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Accessories";
            carTitleH1.style.color = "black";
            break;
    }
})