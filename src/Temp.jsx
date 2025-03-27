export default function Temp(props) {
    const title =props.templist[0].title;
    const writer =props.templist[0].writer;
    console.log(props.templist[0])
    return (
        <>
        <a>{title} ({writer})</a><hr/>
        </>
    );
}