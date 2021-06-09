addEventListener("DOMContentLoaded", function(){
    let gridWidth = 16;
    let container = document.querySelector(".container");

    setInitialGrid();
    setGrid(gridWidth);


    /*
    let sizeUp = document.querySelector("#upButtom");
    sizeUp.addEventListener("click", function(){
        if (pixelGrid < 8) {
            pixelGrid += 1;
            setPixels(pixelGrid);
        };
    });

    let sizeDown = document.querySelector("#downButtom");
    sizeDown.addEventListener("click", function(){
        if (pixelGrid < 2) {
            pixelGrid -= 1;
            setPixels(pixelGrid);
        };
    });
    */


    function setInitialGrid(){
        for (let i = 0; i < 100**2; i++){
            let pixel = document.createElement("div");
            container.append(pixel);
        }
    }




    function setGrid(width)
    {

        let divWidth = 500 / width;
        document.documentElement.style.setProperty('--pixel-width', divWidth + "px");
        
        let pixels = document.querySelectorAll('div.container > div');

        for (let i = 0; i < width**2; i++){
            pixels[i].classList.add("pixel");
        }
        for (let i = width**2; i < 100**2; i++){
            pixels[i].removeAttribute('class');
        }
    };

});






