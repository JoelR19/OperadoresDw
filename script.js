function sumar() {
    let num1 = parseFloat(document.getElementById('sumNumber1').value);
    let num2 = parseFloat(document.getElementById('sumNumber2').value);
    let suma = num1 + num2;
    document.getElementById('sumResultado').textContent = suma;
}

function restar() {
    let num1 = parseFloat(document.getElementById('restaNumber1').value);
    let num2 = parseFloat(document.getElementById('restaNumber2').value);
    let resta = num1 - num2;
    document.getElementById('restaResultado').textContent = resta;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('multiNumber1').value);
    let num2 = parseFloat(document.getElementById('multiNumber2').value);
    let multiplicacion = num1 * num2;
    document.getElementById('multiResultado').textContent = multiplicacion;
}

function dividir() {
    let num1 = parseFloat(document.getElementById('divNumber1').value);
    let num2 = parseFloat(document.getElementById('divNumber2').value);
    let division = num1 / num2;
    document.getElementById('divResultado').textContent = division;
}