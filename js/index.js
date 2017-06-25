// alert('Hello World');

var a = Number(prompt('Введіть значення А'));
var b = Number(prompt('Введіть значення B'));
var c = Number(prompt('Введіть значення C'));

var result = myQuadrEqua(a,b,c);
document.write(result);

function myQuadrEqua(a,b,c) {
    var result, x1,x2;
    
    if (a===0) {
        result = 'Значення А має  не дорівнювати 0<br> A ≠ 0';
        return result;
    }
    var d = discCalc();
    
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / 2*a;
        x2 = (-b - Math.sqrt(d)) / 2*a;
        result = 'Дискримінанта D > 0: D = '+ d +'<br> Рівняння має два корені: x1 = ' + x1 + ', x2 = ' + x2;
        return result;
    }
    else if (d===0) {
        x1 = -b / 2*a;
        result = 'Дискримінанта D = 0: D = '+ d +'<br> Рівняння має тільки один корінь: x1 = ' + x1;
        return result;
    }
    else if (d < 0){
        result = 'Дискримінанта D &#60; 0: D = '+ d +'<br> Рівняння не має коренів';
        return result;
    }
}

function discCalc() {
    return b*b - 4*a*c;
}
