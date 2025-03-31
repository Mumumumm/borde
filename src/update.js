import { useState } from "react";

export default function Update(props){
    const title1 = props.title;
    const body1 = props.body;
    const writer1= props.writer;
    const [title, setTitle] = useState(title1);
    const [body, setBody] = useState(body1);
    const [writer, setWriter] = useState(writer1);

    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault();
                props.onUpdate(title, body, writer);
            }}>             
                <p><input type="text" name="title" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}></input></p>
                <p><textarea name="body" value={body} rows='20' cols='40' onChange={(e)=>{
                    setBody(e.target.value);
                }}></textarea></p>
                <p><input type="text" name="writer" value={writer} onChange={(e)=>{
                    setWriter(e.target.value);
                }}></input></p>
                
                <button onClick={(e)=>{ 
                    props.onUpdate(title,body,writer);
                }}>수정</button>
                <button onClick={()=>{
                    props.onDelete();
                }}>삭제</button>
            </form>
        </>
    );
}; 

// value는 props 로 넘어온 정보는 불변이 되기때문에 수정하기 위해 state를 쓴다
// onChange={(e)=>{setTitle(e.target.value); set으로 value를 바꿔준다 e는 input을 가리킨다