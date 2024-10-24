function calculate(operation) {

    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result = 0;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Ve a primaria';
            }
            break;
        default:
            result = 'Esta operacion no esta registrada';
    }
    document.getElementById('result').value = result;
}