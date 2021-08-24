const link = document.querySelector("a");
const link_href = link.getAttribute("href");
console.log(link_href);

// 속성값 변경하기
const link = document.querySelector("a");
const new_href = "https://www.nate.com";
link.setAttribute("href", new_href);
