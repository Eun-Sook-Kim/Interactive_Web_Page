const link = document.querySelector("a");

link.addEventListener("click", (e)=>{
  e.preventDefault();
  console.log("링크를 클릭했습니다.");
});