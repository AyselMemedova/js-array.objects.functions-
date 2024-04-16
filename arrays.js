 //#studentlərin ortalama score'nu yeni bir arrayda yığın ???

//  const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//   ];



// # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
//   ];

// const array = []
// for(let i = 0; i < webTechs.length; i++){
//     if(webTechs[i].length > 4){
//         array.push(webTechs[i])
//     }
// }
// console.log(array);


//#product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     },
//   ];
  

//   let umumiCem=0;
//   for (let i = 0; i < products.length; i++) {
//     umumiCem+=products[i].price  
//   }
// const ortaQiymet=umumiCem/products.length
// console.log(`Productlarin umumi cemi: ${umumiCem}`);
// console.log(`Productlarin ortalama qiymeti: ${ortaQiymet}`)



// countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// let arr=[]
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].charAt(0)== "A" && countries[i].charAt(countries[i].length-1)=="a") {
//         arr.push(countries[i])
//     } 
// }
// console.log(arr);


// # Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin. ??

// let eded = parseInt(prompt("Bir ədəd daxil edin:"));
// let divisorCount = 0;
// function findNumberOfDivisors(n) {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         if(n%i==0){
//             divisorCount++;
//         }
//     }
// }

// console.log(findNumberOfDivisors(eded));


//daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin


