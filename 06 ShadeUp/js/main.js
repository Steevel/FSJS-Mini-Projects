
function randompickerbtn() {
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16)
    }

    document.getElementById("randomPicker").style.backgroundColor = color;
    document.getElementById('randomValuePara').innerText = color;
}

function hexFindbtn() {
    console.log(document.getElementById('hexInput').value)
    const hexInput = document.getElementById('hexInput').value
    document.getElementById('color-box').style.backgroundColor = hexInput;
}

function RGBFindbtn() {
    const redValue = document.getElementById('RInput').value;
    const greenValue = document.getElementById('GInput').value;
    const blueValue = document.getElementById('BInput').value;
    console.log(redValue, greenValue, blueValue);

    document.getElementById('rgb-color-box').style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

function RangeSelector() {
    const redValue = document.getElementById('RrInput').value;
    const greenValue = document.getElementById('GrInput').value;
    const blueValue = document.getElementById('BrInput').value;

    document.getElementById('range-color-box').style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
}

// hex to rgb converter

String.prototype.convertToRGB = function () {

};

function hexConvbtn() {
    let hex = document.getElementById('hexCInp').value
    console.log(typeof hex)

    r = "0x" + hex[0] + hex[1];
    g = "0x" + hex[2] + hex[3];
    b = "0x" + hex[4] + hex[5];
    // console.log(++r, g, b);
    let color = "rgb(" + +r + "," + +g + "," + +b + ")"
    console.log(color)

    document.getElementById('hexCOut').innerText = color;
}

function rgbConvbtn() {
    const redValue = Number(document.getElementById('RCInput').value);
    const greenValue = Number(document.getElementById('GCInput').value);
    const blueValue = Number(document.getElementById('BCInput').value);

    const red = redValue.toString(16);
    const green = greenValue.toString(16);
    const blue = blueValue.toString(16);

    const color = '#' + (red.length == 1 ? ('0' + red) : red)
        + (green.length == 1 ? ('0' + green) : green)
        + (blue.length == 1 ? ('0' + blue) : blue);

    document.getElementById('rgbCOut').innerText = color;
}
