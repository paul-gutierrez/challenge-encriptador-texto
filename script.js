// Función para encriptar el texto
function encriptarTexto(texto) {
    // El "codigo" para la encriptación
    const llaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = "";

    // Aqui se recorre cada carácter del texto utilizando un for
    for (let i = 0; i < texto.length; i++) {
        let caracterActual = texto[i];
        
        // Si el carácter actual esta en "llaves" entoncees se sustituye por su valor "encriptado"
        if (llaves[caracterActual]) {
            textoEncriptado += llaves[caracterActual];
            
        } else {
            // Si no, se agrega el carácter original
            textoEncriptado += caracterActual;
        }
    }

    return textoEncriptado;
}

// Función para desencriptar
function desencriptarTexto(texto) {
    // El "códgio" para la desencriptación
    const llaves = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoDesencriptado = texto;

    // Con el for se recorre cada valor de nuestro glosario "llaves"
    for (let codigo in llaves) {
        // El bulce se ejecutará mientras el "codigo" se encuentre en el texto
        while (textoDesencriptado.includes(codigo)) {
            // Se reemplaza el "codigo" por su valor original revirtiendo la encripatación
            textoDesencriptado = textoDesencriptado.replace(codigo, llaves[codigo]);
        }
    }

    return textoDesencriptado;
}

document.getElementById('button_encriptar').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();

    if (userInput === '') {
        alert('Por favor, ingresa algún texto.');
        return;
    }

    if (!/^[a-z\s]+$/.test(userInput)) {
        alert('El texto debe contener solo letras minúsculas y no debe tener caracteres especiales.');
        return;
    }

    const resultado = encriptarTexto(userInput);
    const resultElement = document.getElementById('result');

    resultElement.innerText = resultado;
    resultElement.classList.remove('empty');
    document.getElementById('copy-button').classList.add('show');
});

document.getElementById('button_desencriptar').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.trim();

    if (userInput === '') {
        alert('Por favor, ingresa algún texto.');
        return;
    }

    if (!/^[a-z\s]+$/.test(userInput)) {
        alert('El texto debe contener solo letras minúsculas y no debe tener caracteres especiales.');
        return;
    }

    const resultado = desencriptarTexto(userInput);
    const resultElement = document.getElementById('result');

    resultElement.innerText = resultado;
    resultElement.classList.remove('empty');
    document.getElementById('copy-button').classList.add('show');
});

document.getElementById('copy-button').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    navigator.clipboard.writeText(resultElement.innerText).then(() => {
        alert('Texto copiado al portapapeles.');
    });
});

