// 배열에서 "라" 모두 제거
// indexOf 와 splice 사용

const arr = ["가", "나", "다", "라", "마", "라"];

let 라;

// while (라 != -1) {
//   라 = arr.indexOf("라");
//   if (라 === -1) {
//     break;
//   }
//   arr.splice(라, 1);
// }

// console.log(arr);

let index = arr.indexOf("라");
while (index > -1) {
  arr.splice(index, 1);
  index = arr.indexOf("라");
}

console.log(arr);
