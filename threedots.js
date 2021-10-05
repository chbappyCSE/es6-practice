// sprade operator
const ages = [10, 12, 14, 16, 18, 20];
const ages2 = [11, 13,15, 17, 19];
const ages3 = [25, 27, 30, 42, 35];

const allAge = ages.concat(ages2).concat([5]).concat(ages3); //old way
const allAge2 = [ages, ages2, 5, ages3]; // wrong way
/* Sprade operator */
const allAge3 = [...ages, ...ages2, 5, ...ages3]; // sprade operator
const person1 = 500;
const person2 = 600;
const person3 = 700;

const persons = [500, 600, 700];
// const maximum = Math.max(person1, person2, person3);
const maximum = Math.max(...persons); // sprade operator


console.log(allAge3);
console.log(maximum);
