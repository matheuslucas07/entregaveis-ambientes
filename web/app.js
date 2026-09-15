function executarContagem() {
    const primeiro = Number(document.getElementById("contagemPrimeiro").value);
    const n = Number(document.getElementById("contagemN").value);

    if (primeiro > n) {
        document.getElementById("contagemResultado").innerText =
            "Erro: o primeiro número deve ser menor ou igual ao segundo.";
        return;
    }

    const resultado = contagem(primeiro, n);
    document.getElementById("contagemResultado").innerText =
        "Quantidade: " + resultado;
}

function executarPrimo() {
    const numero = Number(document.getElementById("primoInput").value);
    const resultado = ehPrimo(numero);

    document.getElementById("primoResultado").innerText =
        resultado ? numero + " é primo!" : numero + " não é primo!";
}

function executarFibonacci() {
    const numero = Number(document.getElementById("fibInput").value);

    if (numero < 0) {
        document.getElementById("fibResultado").innerText =
            "Digite um número maior ou igual a 0.";
        return;
    }

    const resultado = fibonacci(numero);
    document.getElementById("fibResultado").innerText =
        "Fibonacci(" + numero + ") = " + resultado;
}

function executarMdc() {
    const a = Number(document.getElementById("mdcInput1").value);
    const b = Number(document.getElementById("mdcInput2").value);
    const resultado = mdc(a, b);

    document.getElementById("mdcResultado").innerText =
        "MDC(" + a + ", " + b + ") = " + resultado;
}

function executarQuickSort() {
    const texto = document.getElementById("quickInput").value;
    const numeros = texto.split(",").map(numero => Number(numero.trim()));

    if (numeros.some(numero => isNaN(numero))) {
        document.getElementById("quickResultado").innerText =
            "Digite apenas números separados por vírgula.";
        return;
    }

    const resultado = quicksort(numeros);
    document.getElementById("quickResultado").innerText =
        "Ordenado: " + resultado.join(", ");
}

function executarSomatorio() {
    const texto = document.getElementById("somaInput").value;
    const numeros = texto.split(",").map(numero => Number(numero.trim()));

    if (numeros.some(numero => isNaN(numero))) {
        document.getElementById("somaResultado").innerText =
            "Digite apenas números separados por vírgula.";
        return;
    }

    const resultado = somatorio(numeros);
    document.getElementById("somaResultado").innerText =
        "Somatório: " + resultado;
}
