export default function Header(props){

    const style = {
        textAlign: 'center',
    }

    return(
        <>
            <h1 style={style}>{props.title}</h1> 
            <hr></hr>
        </>
    );
};
// <h1 style={style}>{props.title}</h1> 문자열은 바깥에서 받으니 외부에서 받아오자
// 1회성이 아니라 여러번 사용할것이기 때문에