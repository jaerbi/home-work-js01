// alert('Hello World');
var userName = prompt('Як Вас звати?');
var a = Number(prompt('Введіть значення А'));
var b = Number(prompt('Введіть значення B'));
var c = Number(prompt('Введіть значення C'));

var result = myQuadrEqua(a,b,c);
document.write('Привіт '+ userName +'<br>' + result);

function myQuadrEqua(a,b,c) {
    var result, x1,x2;
    
    if (a===0) {
        result = '<div class="result">Вибачте але значення А має не дорівнювати 0<br> <b>A ≠ 0</b></div>';
        return result;
    }
    var d = discCalc(b,a,c);
    
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / 2*a;
        x2 = (-b - Math.sqrt(d)) / 2*a;
        result = '<div class="result">Дискримінанта D > 0: <b>D = '+ d +'</b><br> Рівняння має два корені: <b>x1 = ' + x1 + '</b>, <b>x2 = ' + x2 +'</b></div>';
        return result;
    }
    else if (d===0) {
        x1 = -b / 2*a;
        result = '<div class="result">Дискримінанта D = 0: <b>D = '+ d +'</b><br> Рівняння має тільки один корінь: <b>x1 = ' + x1 + '</b></div>';
        return result;
    }
    else if (d < 0){
        result = '<div class="result">Дискримінанта D &#60; 0: <b>D = '+ d +'</b><br> Рівняння не має коренів</div>';
        return result;
    }
}

function discCalc(b,a,c) {
    return b*b - 4*a*c;
}
