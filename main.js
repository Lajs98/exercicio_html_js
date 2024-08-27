function validarFormulario() {
    // Obter os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const resultado = document.getElementById('resultado');

    // Validar se Campo B é maior que Campo A
    if (campoB > campoA) {
        resultado.textContent = 'Formulário válido: Campo B é maior que Campo A.';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Formulário inválido: Campo B deve ser maior que Campo A.';
        resultado.style.color = 'red';
    }
}
