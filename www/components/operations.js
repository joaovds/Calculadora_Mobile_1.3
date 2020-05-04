let number1, number2, operador, resul;

let display = document.querySelector('#display');

// Função para mostrar o valor do botão em tela
function showValue(value) {
    display.value = display.value + value;
};

function showOperador(op) {
    if (display.value == "") {
        alert("Digite um Número antes de um operador...")
    }
    else {
        display.value = display.value + " " + op + " ";
    }
};

function calcular() {
    let splitDisplay = (display.value.split(" "))
    
    if (splitDisplay.length == 3) {
        number1 = parseFloat(splitDisplay[0]);
        operador = splitDisplay[1];
        number2 = parseFloat(splitDisplay[2]);

        switch (operador) {
            case "+":
                resul = number1 + number2;
                break;
            case "-":
                resul = number1 - number2;
                break;
            case "X":
                resul = number1 * number2;
                break;
            case "/":
                resul = number1 / number2;
        
            default:
                break;
        }

        display.value = resul;
    }
    else if (splitDisplay.length == 2) {

        number1 = parseFloat(splitDisplay[0]);
        operador = splitDisplay[1];

        switch (operador) {
            case "X²":
                resul = number1 * number1;
                break;
            case "√":
                resul = Math.sqrt(number1);
                break;
            case "N!":
                resul = calcFatorial(number1);
                break;
        
            default:
                break;
        }
        display.value = resul;
    }
    else {
        alert("Há valores faltando!")
    }
}

function calcFatorial(number) {
    let aux = 1;

    for (let i = 1; i <= number; i++) {
        aux *= i;

        if (aux == Infinity) {
            resul = "";
            alert("O Número ultrapassou o suportado pelo navegador, tente outro menor...");
            break;
        }
        if (i == number) {
            resul = aux;
            break;
        }
    }

    return resul;
}

// Função para limpar o display
function clean() {
    display.value = "";
    number1 = "";
    number2 = "";
    resul = "";
    operador = "";
};