let inputData = document.getElementById('input');
let submitBtn = document.getElementById('submit');
let qrCode = document.getElementById("img");

// Generate QR Code
const getQRCode = async () => {
    let query = inputData.value;
    if (query.trim().length !== 0) {
        let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${query}`)
        qrCode.style.display = 'block';
        qrCode.src = res.url;
        inputData.value = ""
    } else {
        alert("Enter some text to generate qr code.")
    }

}

submitBtn.addEventListener('click', () => {
    getQRCode();
})