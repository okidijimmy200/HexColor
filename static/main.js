// immediate invoked function expression
// we will create local scope so does not pollute global scope

// immediate invoked func
(function (){

    // elements we are targetting
    const hexValue = document.getElementById('hex-value')
    const btn = document.getElementById('btn')

    // add event listner
    btn.addEventListener('click', createHex);

    function createHex() {
        // array to hold hex values
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#'; // + 6 values

        for(let i = 0;i<6; i++) // looping through the hexValues
    {
        // --math floor is for rounding to nearest value
        let random = Math.floor(Math.random() * hexValues.length) // multiply by lenght of array
        // add to the hexColor
        hexColor +=hexValues[random];

    }
    //  select and attach the color to body
    document.body.style.backgroundColor = hexColor;
    // displaying the hexvalue on the screen
    hexValue.textContent = hexColor

    }

})();