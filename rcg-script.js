const generateButton = document.getElementById('generate-button');
const generatedColorText = document.getElementById('generated-color-text');

generateButton.addEventListener('click', generateColor);
generatedColorText.addEventListener('click', copyText);

function generateColor(){
    let generatedColor = 'rgb(' + String(getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255)) + ')';
    generatedColorText.innerHTML = generatedColor;
    document.body.style.backgroundColor = generatedColor;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function copyText(){
    if(generatedColorText.innerHTML != '...'){
        navigator.clipboard.writeText(generatedColorText.innerHTML);
        alert('Text copied');
    }
}