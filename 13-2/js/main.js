//자주 수정이 일어날 정보값들을 상단에 전역변수로 설정
const frame = "section"; 
const box = "article"; 
const speed = '0.5s'; 
const activeClass = "on"; 
const btn = document.querySelectorAll("main ul li"); 
let grid; //플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정

//이미지 소스를 활용한 모든 콘텐츠가 로딩완료되면
window.addEventListener("load", ()=>{     
  init(); //화면 초기화 함수 호출
  filter(btn); //정렬 버튼 기능 함수 호출
});

//화면 초기화 함수 정의
function init(){
  //변수 grid에 담길 결과값이 다른 함수인 filter에서도 활용되야 하므로 
  //전역변수로 선언
  grid = new Isotope(frame, {
    itemSelector: box,
    columnWidth: box,
    transitionDuration: speed
  });
}
  
//정렬 버튼 기능 함수 정의
function filter(arr){ //매개 변수 arr을 통해 반복을 돌 버튼 그룹을 인수로 전달
  for(let el of arr){
    el.addEventListener("click", e=>{
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      grid.arrange({
        filter : sort
      });

      for(let el of arr){
        el.classList.remove(activeClass);
      }
      
      e.currentTarget.classList.add(activeClass);
    })
  }
}

