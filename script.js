function calculateIMC() {
    var age = document.getElementById('age').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    var imc = weight / (height * height);

    document.getElementById('imcValue').innerText = imc.toFixed(2);

    var classification = getIMCClassification(imc, age);
    document.getElementById('classification').innerText = classification;

    displayResultImage(classification);
}

function getIMCClassification(imc, age) {
    if (age === 'senior') {
        if (imc < 22) return 'Baixo peso';
        else if (imc >= 22 && imc <= 27) return 'Normal';
        else return 'Sobrepeso';
    } else {
        if (imc < 18.5) return 'Baixo peso';
        else if (imc >= 18.5 && imc < 24.9) return 'Normal';
        else if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        else if (imc >= 30 && imc < 34.9) return 'Obesidade I';
        else if (imc >= 35 && imc < 39.9) return 'Obesidade II';
        else return 'Obesidade III';
    }
}

function displayResultImage(classification) {
    var imagePath;

    switch (classification) {
        case 'Baixo peso':
            imagePath = '../img/pessoa1.png';
            break;
        case 'Normal':
            imagePath = '../img/pessoa2.png';
            break;
        case 'Sobrepeso':
            imagePath = '../img/pessoa3.png';
            break;
        case 'Obesidade I':
            imagePath = '../img/pessoa4.png';
            break;
        case 'Obesidade II':
            imagePath = '../img/pessoa5.png';
            break;
        case 'Obesidade III':
            imagePath = '../img/pessoa5.png';
            break;
        default:
            imagePath = '../img/pessoas.png';
    }

    document.getElementById('resultImage').src = imagePath;
}
