function add(num1, num2){
    return num1 + num2;
}
const total = add(15,17);
console.log(total);

// Default value method 1
function add2(num3, num4){
    if(num4 == undefined){
        num4 = 0; 
    }
    return num3 + num4;
}
const resutl = add2(20);
console.log(resutl);

// Default value method 2
function add3(num5, num6){
    num6 = num6 || 0;
    return num5 + num6;
}
const resutl2 = add3(20);
console.log(resutl2);

// Default value method 3
function add4(num7, num8 = 0){
    return num7 + num8;
}
const resutl4 = add4(50, 50);
console.log(resutl4);