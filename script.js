addEventListener("DOMContentLoaded", function(){

    let container = document.querySelector(".container"); 
    setInitialGrid();
    
    let pixels = document.querySelectorAll('div.container > div');
    setGrid(32);

    let gridWidth;
    let activePixels = document.querySelectorAll('.pixel');
    

    //Event Listeners

    let clickMode = false;
    let isMouseDown = false;

    function setEventListeners() {
        let activePixels = document.querySelectorAll('.pixel');

        //Listens for Mouseenter event of each pixel
        activePixels.forEach(function(pixel){
            
            pixel.addEventListener('mouseenter', function(e) {
                if(!clickMode || isMouseDown){
                    e.target.style.backgroundColor = pixelColor;
                    console.log(e);
                }
            });
        });
    
        //Checks if mouse is being held down or not for the Click and Drag feature
        document.addEventListener('mousedown', () => {isMouseDown = true;});
        document.addEventListener('mouseup', () => {isMouseDown = false;});

        //Listens for when user makes a single click on a pixel
        activePixels.forEach(function(pixel){
            pixel.addEventListener('click', function(e) {
                e.target.style.backgroundColor = pixelColor;
            });
        });

        //eventlistener for the reset button
        document.querySelector('#reset').addEventListener('click', function(){
            pixels.forEach((pixel) => {
                pixel.style.backgroundColor = 'white';
            });
        });
    };

    //function changePixelColor(e)

    //Listens for when the user changes the size of the grid
    let typeSize = document.querySelector('#change-size');
    document.querySelector('#change-grid').addEventListener('click', function(){
        if (typeSize.value && typeSize.value >= 8 && typeSize.value <= 100){
            typeSize.style.placeHolder = typeSize.value;
            setGrid(typeSize.value);
        }else{
            alert('Grid Size must be between 8 and 100 pixels!');
        }
    });


    //Listens for color select buttons
    let pixelColor = 'black';
    let colorSelect = document.querySelectorAll('#select-color > button');
    colorSelect.forEach(function(colorButton){
        colorButton.addEventListener('click', function(){
            pixelColor = colorButton.getAttribute('id');
        });
    });

    //Listens for Mode select buttons
    let clickButton = document.querySelector('#click');
    let hoverButton = document.querySelector('#hover');

    clickButton.addEventListener("click", function(){
        clickMode = true;
        hoverButton.style.backgroundColor = 'white';
        clickButton.style.backgroundColor = '#999';
    });

    hoverButton.addEventListener("click", function(){
        clickMode = false;
        clickButton.style.backgroundColor = 'white';
        hoverButton.style.backgroundColor = '#999';

    });
    







    function setInitialGrid(){
        for (let i = 0; i < 100**2; i++){
            let pixel = document.createElement("div");
            container.append(pixel);
        }
    };  

    function setGrid(gridWidth)
    {
        setWidthandBorder(gridWidth);

        for (let i = 0; i < gridWidth**2; i++){
            pixels[i].classList.add("pixel");
            pixels[i].style.backgroundColor = 'white';

        }
        for (let i = gridWidth**2; i < 100**2; i++){
            pixels[i].removeAttribute('class');
            pixels[i].style.backgroundColor = 'white';
        }
        setEventListeners();
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






