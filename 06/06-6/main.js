const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

//버튼의 개수만큼 반복을 돌며 클릭 이벤트 연결
for(let i=0; btns.length; i++){

    //각 버튼을 클릭할 때마다
    btns[i].addEventListener("click", e=>{
        //각각 인수를 순서값과 버튼, 박스그룹을 넣어서
        //activation함수 호출
        activation(i, btns);
        activation(i, boxs);
    })
}

//첫 번째 인수로 순서값, 두번째 인수로 그룹을 전달받아
function activation(index, list){
    //인수로 받은 요소의 그룹의 갯수만큼 반복을 돌며 비활성화
    for(let el of list){
        el.classList.remove("on");
    }
    //첫번째 인수로 받은 순서에 해당하는 그룹의 요소만 찾아서 활성화
    list[index].classList.add("on");
}