// Utilize built in browser function to force the initColorPicker() function call
// to wait until the page is fully loaded before running
window.onload = function() {
    initColorPicker();
};
// Function containing all ids and operations involving the color picker
function initColorPicker() {
    // Local variable containing the id of the color box
    let element = document.getElementById("color-box");
    // Object with keys containing the ids of the inputs
    let colors = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    // Local variable containing the class name of the inputs
    let colorPickers = document.getElementsByClassName("picker");
    // Call eventListeners function
    setColorPickerEventListeners(element, colors, colorPickers);
}
// Function that translates current values to the web page
function setColorPickerEventListeners(element, colors, pickerElements) {
    // local variable containing the length of the pickerElements array
    // Created to prevent the loop condition from repeatedly quarrying .length
    let pickerLen = pickerElements.length;
    // My (Hopefully not misplaced) attempt to further optimize the loop
    // Declare the variables that will contain the input values
    let red, green, blue;
    // for loop conditioned on the pickerElements array length
    for (let i = 0; i < pickerLen; i++) {
        //The index is increased by the incrementer with each repetition effecting all within the array
        // 'change' allows the function to continuously update the variables within
        // () function   => connector   {} function's body
        pickerElements[i].addEventListener('change', () => {
            // Colors is an object within the function
            // Red is a key containing the id of the red input and acts as a gateway to the red input in the HTML file
            // Value is the current value of the red input
            red   = colors.red.value;
            green = colors.green.value;
            blue  = colors.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue);
        });
    }
}
// Function that sets the color of the color box
function setElementBGColor(element, red, green, blue) {
    // An array containing the three primary colors
    // .join(',') adds commas between the indices
    let rgbVal = [red, green, blue].join(',');
    //  the color box sends the rgb values to the background-color built-in function in the CSS file
    element.style.backgroundColor = "rgb(" + rgbVal + ")";
}
// Function that displays the default values for the inputs
function setDisplayValues(red, green, blue) {
    // Variables for the span ids of the inputs
    let redVal =   document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal =  document.getElementById("blueVal");
    // Changes the value of the spans to reflect the values of the inputs in the HTML?
    redVal.innerText =   red;
    greenVal.innerText = green;
    blueVal.innerText =  blue;
}