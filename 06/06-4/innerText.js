const list = document.querySelectorAll(".list li");

for(let el of list){
  el.addEventListener("click", e=>{
    e.preventDefault();
    console.log(e.currentTarget.innerText);
  })
}
