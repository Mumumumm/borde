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
                props.onPost(title, body, writer);
            }}>             
                <p><input type="text" name="title" value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}></input></p>
                <p><textarea name="body" value={body} onChange={(e)=>{
                    setBody(e.target.value);
                }}></textarea></p>
                <p><input type="text" name="writer" value={writer} onChange={(e)=>{
                    setWriter(e.target.value);
                }}></input></p>
                
                <button onClick={(e)=>{
                    props.onUpdate(title,body,writer);
                }}>수정</button>
                <button>삭제</button>
            </form>
        </>
    );
}; 