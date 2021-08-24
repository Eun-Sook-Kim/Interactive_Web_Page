const wrap = document.querySelector("#wrap");
const box  = wrap.querySelector("article");

wrap.addEventListener("click", () => { 
    box.style.backgroundColor = "hotpink";
});

/* 자바스크립트로 클래스 제어하기 2
wrap.addEventListener("click", () => { 
  wrap.classList.add("on");
});
*/

/* 자바스크립트로 클래스 제어하기 3
wrap.addEventListener("click", () => { 
  let isOn = wrap.classList.contains("on");
  console.log(isOn);
*/

/* 자바스크립트로 클래스 제어하기 4
wrap.addEventListener("click", () => { 
  let isOn = wrap.classList.contains("on");
  console.log(isOn);
  wrap.classList.add("on");
*/

/* 자바스크립트로 클래스 제어하기 5
wrap.addEventListener("click", () => { 
  let isOn = wrap.classList.contains("on");
  console.log(isOn); 

  if(isOn){
      wrap.classList.remove("on");
  }else{
      wrap.classList.add("on");
  }
});
*/

/* 자바스크립트로 클래스 제어하기 6
wrap.addEventListener("click", () => { 
  wrap.classList.toggle("on");
});
*/