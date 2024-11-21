function interpretar() {
    const codigo = document.getElementById("codigo").value;
    const saida = document.getElementById("saida");
    saida.textContent = ""; // Limpa a saída antes de cada execução

    // Função para simular o console.log no HTML
    function imprimir(...args) {
        saida.textContent += args.join(' ') + "\n";
    }

    // Função para simular o prompt no HTML
    function ler(mensagem) {
        return prompt(mensagem);
    }

    //Aviso
    function aviso(Aviso) {
        return alert(Aviso)
    }
    
    //conta
    function conta(...args) {
        saida.textContent 
        var n1 = Number.parseFloat(window.prompt('digite um número'))
        var n2 = Number.parseInt(window.prompt('digite outro número'))
        var opr_ = window.prompt('Qual é a operação?? -- + - * / --')
        var soma = n1 + n2
        var menos = n1 - n2
        var vezes = n1 * n2
        var dividir = n1 / n2
        if (opr_ == '+') {
            imprimir(`A resposta da soma é: ${soma}`)
        }
        if (opr_ == '-') {
            imprimir(`A resposta da subtração é: ${menos}`)
        }
        if (opr_ == '*') {
            imprimir(`A resposta da multiplicação é: ${vezes}`)
        }
        if (opr_ == '/') {
            imprimir(`A resposta da divisão é: ${dividir}`)
        }
    }
    
    // Tradução básica do código em português para JavaScript
    const traducao = codigo
        .replace(/imprimir\(/g, 'imprimir(') // Imprimir para console.log
        .replace(/ler\(/g, 'ler(') // Ler para prompt
        .replace(/conta\(/g, 'conta(') // Imprimir para console.log

        // Tipos de variáveis
        .replace(/inded/g, 'let') // Tipo texto e numero inteiro/decimal

        // Constantes booleanas
        .replace(/verdadeiro/g, 'true')
        .replace(/falso/g, 'false')

        // Estruturas de controle
        .replace(/se \(/g, 'if (') // Se para if
        .replace(/senao se \(/g, 'else if (') // Senão se para else if
        .replace(/senao/g, 'else') // Senão para else

        // Laços de repetição
        .replace(/enquanto \(/g, 'while (') // Enquanto para while
        .replace(/para \(/g, 'for (') // Para para for
        .replace(/ de /g, '=') // Suporte para for (i de 0 até n)
        .replace(/até/g, '<=') // Até para delimitar em for loop
        .replace(/fazer {/g, 'do {') // Fazer para do-while

        // Funções
        .replace(/funcao/g, 'function') // Funcao para function
        .replace(/retornar/g, 'return') // Retornar para return

        // Tratamento de erros
        .replace(/tente/g, 'try') // Tente para try
        .replace(/capturar/g, 'catch') // Capturar para catch
        .replace(/jogar/g, 'throw'); // Jogar para throw
        
    try {
        // Executa o código traduzido em português para JS
        eval(traducao);
    } catch (erro) {
        saida.textContent = `Ocurreu um erro no seu código: ${erro}`;
    }
} // this code was made by a 12-year-old child