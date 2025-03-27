import logo from './logo.svg';
import './App.css';
import Header from './hedaer';
import Menu from './menu';
import { useState } from 'react';
import Postlist from './postlist';
import Temp from './Temp';
import Write from './write';

function App() {
  // ui 변경을 위한 상태값 먼저 정의 처음 기본상태 list
  const [mode, setMode] = useState("LIST");
  const menuList = [
    { id: 1, title: "글쓰기", mode: "WRITE" },
    { id: 2, title: "글목록", mode: "LIST" },
  ];
  
  const [id, setId] = useState(0);
  // 작성이 추가될때마다 배열에 추가
  const [postList, setPostlist] = useState([
    { id: 1, title: "반갑습니다", body: "Hello", writer: "김준홍" },
    { id: 2, title: "반가워여", body: "Hello", writer: "준홍" },
    { id: 3, title: "반갑", body: "Hello", writer: "김" },
  ]);
  const [nextId, setNextid] = useState(postList.length + 1); // newPost 객체에 id 값 부여시키기 위한 state




  // 처음에는 빈 상태
  let content = null;
  // 조건문으로 상태에따라 UI전환
  switch (mode) {
    case "LIST": // 리스트목록으로 와서 나와야 하기때문에 컴포넌트를 여기에
      // content =  <Postlist postList={postList}></Postlist>
      content = <Postlist postList={postList}></Postlist>
      break;

    case "WRITE":
      content = <Write bt='작성하기' onSubmit={(_title,_body,_write) => {
        let newPost = {id: nextId, title:_title, body:_body, writer:_write}; // 객체구조. nextID = postList길이의 +1 (4), title = create컴포넌트에서 받은 값 body도 마찬가지
        // id 를 새롭게 누적하려면 state가 필요하다. 추가될때마다 id가 늘어야 하기 때문에
        postList.push(newPost); // 새로운 객체를 기존 postList에 추가
        let newPosted = [...postList]; // 기본 배열 객체를 새로운 변수에 저장
        setPostlist(newPosted); // 리랜더링 될 수 있게 새로운 값  넣기
        setId(newPost.id); //
        setMode("LIST");
      }}></Write>
      break;

    case "READ":
      break;
  }


  // if(mode === "LIST"){
  //   content = <h2>글목록</h2>;
  // }
  // else if(mode === "WRITE"){
  //   content = <h2>글작성</h2>;
  // }
  

  return ( // App리턴 

    <>
      <Header title='글목록' />
      {/*  */}
        
      <Menu menuList={menuList} onChange={(_mode) => { // 자식에게 줄 함수 정의하기 // onChange이름은 바꿔됌

        setMode(_mode); // 받아올 함수 가져오기 
      }}></Menu>

      {content}

    </>
  );
}

export default App;
// 