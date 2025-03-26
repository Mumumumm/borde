export default function Write(props) {

  return (
    <form>
      <p><input type="text" placeholder="제목을 입력하세요"></input></p>
      <p><textarea placeholder="본문을 입력하세요"></textarea></p>
      <p><input type="text" ></input></p>
      <p><button type="submit">{props.bt}</button></p>
    </form>
  );
};