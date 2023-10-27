const varificador_adulto = (imc_result) => {
    var img = document.getElementById("resultado_img")
    if (imc_result < 18,5) {
        img.scr = "imagental";
    } else if (imc_result >= 18,5 | imc_result <= 24,9) {

    } 
}

const calc_imc = () => {
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Converter altura para metros
    const peso = parseFloat(document.getElementById('peso').value);
    const faixaEtaria = document.getElementById('faixaEtaria').value;

    const imc = peso / (altura * altura);
    let resultado = '';

    if (faixaEtaria === 'idoso') {
        resultado = 'Idoso';
        verificador_idoso(imc)
    } else {
        resultado = 'Adulto';
        verificador_adulto(imc)
    }

    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} | Categoria: ${resultado}`;
}
