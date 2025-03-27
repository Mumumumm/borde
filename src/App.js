import logo from './logo.svg';
import './App.css';
import Header from './hedaer';
import Menu from './menu';
import { useState } from 'react';
import Postlist from './postlist';
import Temp from './Temp';

function App() {
  // ui 변경을 위한 상태값 먼저 정의 처음 기본상태 list
  const [mode, setMode] = useState("LIST");
  const menuList = [
    {id:1, title:"글쓰기", mode:"WRITE"},
    {id:2, title:"글목록", mode:"LIST"},
  ];

  // 작성이 추가될때마다 배열에 추가
  const [postList, setPostlist]= useState([
    {id:1, title:"반갑습니다", body:"Hello", writer: "김준홍"},
    {id:2, title:"반가워여", body:"Hello", writer: "준홍"},
    {id:3, title:"반갑", body:"Hello", writer: "김"},
  ]);


  // 처음에는 빈 상태
  let content = null;
  // 조건문으로 상태에따라 UI전환
  switch(mode){
    case "LIST": // 리스트목록으로 와서 나와야 하기때문에 컴포넌트를 여기에
      // content =  <Postlist postList={postList}></Postlist>
      content = <postList postlist={postList}></postList>
      break;
    case "WRITE":
      content = <h2>글쓰기</h2>
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
      <Menu menuList={menuList} onChange={(_mode)=>{ // 자식에게 줄 함수 정의하기 // onChange이름은 바꿔됌
        // 
        setMode(_mode); // 받아올 함수 가져오기 
      }}></Menu>

      {content}

    </>
  );
}

export default App;
// 