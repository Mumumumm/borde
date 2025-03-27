export default function Postlist(props){
    const post = [];
    for(let p of props.postList){
        const item = <> <a id={p.id} href="/" onClick={(e)=>{
                e.preventDefault();
                props.onSelect(e.target.id);
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