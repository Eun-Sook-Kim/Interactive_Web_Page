/* 요소를 1개 선택하기 
const item = document.querySelector("#wrap article");
console.log(item); */

/* 요소를 여러 개 선택하기 
const items = document.querySelectorAll("#wrap article");
console.log(items); */

/* 요소를 여러 개 선택하기 - for of문 사용 */
const items = document.querySelectorAll("#wrap article");

for(let item of items) {
  console.log(item);
}

/* 요소를 여러 개 선택하기 - for문 사용 
const items = document.querySelectorAll("#wrap article");

for(let i=0; i<items.length; i++){
    console.log(items[i]);
}
*/