export default function Postlist(props){
    const post = [];
    for(let p of props.postList){
        const item = <> <a id={p.id} href="/read" onClick={(e)=>{
                e.preventDefault(); // 호출 함수는 꼭() 전달하지 않기 때문에 괄호에 빈칸
                props.onSelect(Number(e.target.id)); // props로 onSelect함수를 // 호출 a id={p.id} 문자열로 받기 때문에 숫자로 바꿔준다
            }}>{p.title} (작성자:{p.writer})</a><hr/>
        </>
        post.push(item);
    }

    return(
        <>
        {post}
        </>
    );
};

// 빈배열을 먼저만들어 거기에 리스트가 들어가야해
// 리스트 넣어야하니까 푸쉬를 써야지
// 태그가 두가지 이상이면 빈태그를 만들어서 감싸주자
// 어느 id인지 알수 있게

// 어떤 태그의 속성값으로 넘어가면 문자열이 된다 -> e.target (a태그) .id (속성값) = id={p.id} 이것