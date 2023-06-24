

function Title(props) {
    return (
        <div
            className={props.clicked}
            onClick={e=>props.click(e)}
        >
        <div className="tool-paragraph">
            <h1>H1</h1>
        </div>
      </div>
    );
  }
  
  export default Title;