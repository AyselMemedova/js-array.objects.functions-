//1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)

// function printFullName(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(`I am ${fullName}`);
// }

// console.log(printFullName("jhon", "doe"))


// 2) daxil edilən ədədin kvadratını return edən funksiya yazın

// function square(number) {
//         return number**2
//     }
//     var eded = parseInt(prompt("Bir ədəd daxil edin:"));
//     console.log(square(eded)); 


//3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function toplama(a,b) {
//     return a+b  
// }

// function cixma(a,b) {
//     return a-b  
// }

// function vurma(a,b) {
//     return a*b
// }

// function bolme(a,b) {
//     return a/b
// }

// let eded1 = parseInt(prompt("Ilk ədəd daxil edin:"));
// let eded2 = parseInt(prompt("Ikinci ədəd daxil edin:"));
// console.log(toplama(eded1, eded2));
// console.log(cixma(eded1,eded2));
// console.log(vurma(eded1,eded2));
// console.log(bolme(eded1,eded2));

//4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.  ???

// function hesabla(a,b , operator) {
//     switch (operator) {
//         case "+":
//             return a+b;
//         case "-" :
//             return a-b;

//         case "*":
//             return a*b;

//         case "/":
//             return a/b;
    
//         default:
//             return "Duzgun operator daxil edin"
//     }
    
// }

// let eded1 = parseInt(prompt("Ilk ədəd daxil edin:"));
// let eded2 = parseInt(prompt("Ikinci ədəd daxil edin:"))
// let operator= (prompt("Operator daxil edin"))
// console.log(hesabla());

// 5) arrayın ilk və son elementinin cəmini return edən function yazın

// const cem=(array)=>{
//     return(array[0]+array[array.length-1])
// };
// console.log(cem([1, 2, 3]));
// console.log(cem([80, 5, 58, 17, 100])); 
// console.log(cem([15, -500, 0, 50])); 


//6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// const arrayCem = (array) => {  
//     const cem = array.reduce((total, num) => total + num, 0);
//     return cem;
// };
// console.log(arrayCem([1, 2, 3])); 
// console.log(arrayCem([80, 5, 58, 17, 100])); 
// console.log(arrayCem([15, -500, 0, 50])); 


// 7) arrayin daxilindəki max elementi return edən funksiya yazın  ?????

const maxElement = (arr) => {
    return Math.max(...arr);
}
console.log(maxElement([1, 2, 3]));
console.log(maxElement([80, 5, 58, 17, 100])); 
console.log(maxElement([15,-500, 0, 50]));

