export default function Menu(props){ // 부모에게 전달해주기 위한 props

    const style = {
        margin: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '5px'
    }

    const menuArr = [];
    for(let m of props.menuList){ // {menuList=[id,title,mode], onChange={menuList}}
        const item = <a key={m.id} href="/" style={style}  onClick={(e)=>{
            e.preventDefault();
            props.onChange(m.mode);
        }}>{m.title}</a> // 글쓰기 또는 글목록
        menuArr.push(item); // item을 메뉴배열에 푸쉬
    }

    return(
        <>
            {menuArr}
            <hr></hr>


            {/* <a href='/' style={style} onClick={(e)=>{
                e.preventDefault(); // 기본기능 off
                props.onChange("WRITE"); // props 를 통해 부모에게 write 전달
            }}>글쓰기</a>

            <a href='/' style={style} onClick={(e)=>{ // a태그가 클릭되었을때
                e.preventDefault(); // 기본기능 off
                props.onChange("LIST"); // props 를 통해 부모에게 list 전달
            }}>글목록</a>
            <hr></hr> */}
        </>
    );
};