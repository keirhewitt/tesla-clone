const carTitleH1 = document.querySelector('.tesla-model-name');

// Change model name when scrolling down
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    let pHeight = window.innerHeight;
    let bufferTransition = 300;

    console.log(`Page height: ${pHeight}`);
    carTitleH1.style.transition - "all 2s";

    console.log(`Current height: ${scrollY}`);

    switch (true) {

        /* PAGE 1 */
        case scrollY < (pHeight * 0.8):
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model S";
            break;
        case scrollY > (pHeight * 0.8) && scrollY < (pHeight * 0.9):
            carTitleH1.style.opacity = 0;
            break;

        /* PAGE 2 */
        case scrollY > (pHeight * 0.9) && scrollY < ((pHeight * 2) * 0.8): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model 3";
            break;
        case scrollY > ((pHeight * 2) * 0.8) && scrollY < ((pHeight * 2) * 0.9): 
            carTitleH1.style.opacity = "0";
            break;

        /* PAGE 3 */
        case scrollY > ((pHeight * 2) * 0.9) && scrollY < ((pHeight * 3) * 0.8): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model X";
            break;
        case scrollY > ((pHeight * 3) * 0.8) && scrollY < ((pHeight * 3) * 0.9): 
            carTitleH1.style.opacity = "0";
            break;
        
        /* PAGE 4 */
        case scrollY > ((pHeight * 3) * 0.9) && scrollY < ((pHeight * 4) * 0.8): 
            carTitleH1.style.opacity = "1";
            carTitleH1.innerHTML = "Model Y";
            break;
    }
})