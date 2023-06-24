


function Paragraph(props) {

    return (
      <div
        className={props.clicked}
        onClick={props.click}
      >
        <div className="tool-paragraph">
            <h1>P</h1>
        </div>
      </div>
    );
  }
  
  export default Paragraph;