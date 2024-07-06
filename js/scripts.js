var result = document.getElementById('result');
var val_1 = false;
var val_2 = false;
var oper = '+';
var operPressed = false;
var tot = 0;
var cal_done = false;

function num(val) {
    val = val.toString();

    if (cal_done) cls();

    if (!operPressed) {
        if (!val_1) val_1 = '0';
        val_1 = lengthFix(val_1 + val);
        result.innerHTML = val_1;
    } else {
        if (!val_2) val_2 = '0';
        val_2 = lengthFix(val_2 + val);
        result.innerHTML = val_2;
    }
}

function calc(val) {
    if (val_1 && val_2) {
        total();
        oper = val;
    } else if (!val_1) {
        return;
    } else if (!val_2 && operPressed) {
        oper = val;
    } else {
        oper = val;
        operPressed = true;
    }
    result.innerHTML = val;
}

function total() {
    if (!val_1) return;

    if (!val_2) {
        tot = magic(val_1, val_1, oper);
    } else {
        tot = magic(val_1, val_2, oper);
    }

    tot = lengthFix(tot.toString());
    result.innerHTML = tot;
    val_1 = tot;
    val_2 = false;
    operPressed = false;
    cal_done = true;
}

function magic(a, b, oper) {
    switch (oper) {
        case '+':
            return +a + +b;
        case '-':
            return +a - +b;
        case '/':
            return +a / +b;
        case '*':
            return +a * +b;
        default:
            return 0;
    }
}

function cls() {
    result.innerHTML = '0';
    val_1 = false;
    val_2 = false;
    oper = '+';
    tot = 0;
    cal_done = false;
    operPressed = false;
}

function lengthFix(o) {
    o = o.toString();
    if (o.length > 12) o = o.substring(0, 12);
    return o;
}

document.onkeyup = function(e) {
    if (e.key === '0') num('0');
    if (e.key === '1') num('1');
    if (e.key === '2') num('2');
    if (e.key === '3') num('3');
    if (e.key === '4') num('4');
    if (e.key === '5') num('5');
    if (e.key === '6') num('6');
    if (e.key === '7') num('7');
    if (e.key === '8') num('8');
    if (e.key === '9') num('9');
    if (e.key === '.') num('.');
    if (e.key === '/') calc('/');
    if (e.key === '*') calc('*');
    if (e.key === '+') calc('+');
    if (e.key === '-') calc('-');
    if (e.key === 'Enter') total();
    if (e.key === 'Backspace' || e.key === 'Delete') cls();
    if (e.key === 'Escape') cls();
};