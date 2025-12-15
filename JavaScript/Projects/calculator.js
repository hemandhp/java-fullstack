const display = document.getElementById('display');
const append = (value) => display.value += value;
const clearDisplay = () => display.value = '';
const result = () => {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}