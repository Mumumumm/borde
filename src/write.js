export default function Write(props) {
  const style = {
    width: '100%'
  }


  return (
      <>
        <form onSubmit={(e)=>{
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          const write = e.target.write.value;
          props.onSubmit(title, body, write);
        }}>
          <p><input name="title" type="text" placeholder="제목을 입력하세요" style={style}></input></p>
          <p><textarea name="body" rows='20' cols='40' placeholder="본문을 입력하세요" style={style} ></textarea></p>
          <p><input name="write" type="text" placeholder='작성자 이름' style={style} ></input></p>
          <p><button type="submit">{props.bt}</button></p>
        </form>
      </>
  );
};

// form에서 onSubmit을 사용할때 name을 사용한다

// 부모에게 넘겨주기 위한 정보 준비
// const title = e.target.title.value; form 안 name이 title인 사용자값
// const body = e.target.body.value; form 안 name이 body인 사용자값
// const write = e.target.write.value; form 안 name이 write인 사용자값

//  props.onSubmit(title, body, write); 입력받은것을 넘겨줄겁니다.