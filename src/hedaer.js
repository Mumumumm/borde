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