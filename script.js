addEventListener("DOMContentLoaded", function(){
    let gridWidth = 30;
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
    };  

    function setGrid(gridWidth)
    {
        setWidthandBorder(gridWidth);

        let pixels = document.querySelectorAll('div.container > div');

        for (let i = 0; i < gridWidth**2; i++){
            pixels[i].classList.add("pixel");
        }
        for (let i = gridWidth**2; i < 100**2; i++){
            pixels[i].removeAttribute('class');
        }
    };

    function setWidthandBorder(gridWidth){
        let borderWidth = 1;
        let borderColor = 'black';

        if (gridWidth > 64){
            borderWidth = 0;
        }

        let pixelWidth = 500 / gridWidth - 2 * borderWidth;
        document.documentElement.style.setProperty('--pixel-width', pixelWidth + "px");
        document.documentElement.style.setProperty('--border-width', borderWidth + "px");
        document.documentElement.style.setProperty('--border-color', borderColor);
    };

});






