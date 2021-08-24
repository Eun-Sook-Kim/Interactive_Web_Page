//모든 article 요소들을 변수 items에 저장
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

//items의 갯수만큼 반복을 돌면 반복 
for(let el of items){     
    //현재 반복돌고 있는 article요소에 mouseenter 이벤트 발생 시    
    el.addEventListener("mouseenter", e=>{
        //자식인 video요소 재생
        e.currentTarget.querySelector("video").play();  
    });

    //현재 반복돌고 있는 article요소에 mouseleave 이벤트 발생 시 
    el.addEventListener("mouseleave", e=>{
        //자식인 video요소 일시정지
        e.currentTarget.querySelector("video").pause();
    });

    //현재 반복돌고 있는 article요소에 click 이벤트 발생 시
    el.addEventListener("click", e=>{     
        //제목과 본문의 내용, 그리고 video요소의 src값을 변수에 저장  
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        //aside 요소 안쪽의 콘텐츠에 위의 변수 내용을 적용
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        //aside 요소 안쪽의 동영상을 재생하고 aside요소에 on을 붙여 팝업 패널 활성화
        aside.querySelector("video").play();
        aside.classList.add("on");
    });

    //닫기 버튼 클릭 시 
    close.addEventListener("click", ()=>{
        //aside 요소에 클래스 on을 제거해 비활성화 하고 안쪽의 영상을 재생중지
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
}        