import { useState, useEffect } from "react";

function SimpleBlocks2(props) {
  const classNames = require("classnames");
  const up = ">";

  const [editor, setEditor] = useState({
    blockId: '',
    value: '',
  })

  const [editorId, setEditorId] = useState('222');
  const [editorValue, setEditorValue] = useState('333');


  const [blocks, setBlocks] = useState([
    {
      id: 0,
      color: "yellow",
      active: "",
      tag: "h1",
      value: "Title",
      style: {
        height: "auto",
        fontSize: "40px",
        padding: "10px",
        backgroundColor: "white",
      },
      col: [
        {
          content: "Title",
          style: {
            width: "100%",
            backgroundColor: "white",
          },
        },
      ],
    },
    {
      id: 1,
      color: "red",
      active: "",
      tag: "p",
      style: {
        backgroundColor: "white",
        padding: "10px",
        height: "auto",
        fontSize: "12px",
        fontWeight: "light",
      },
      col: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas, semper nunc ut, rutrum diam. Etiam ante leo, laoreet eu enim vel, tincidunt eleifend metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas, semper nunc ut, rutrum diam. Etiam ante leo, laoreet eu enim vel, tincidunt eleifend metus.",
          style: {
            width: "100%",
            backgroundColor: "white",
          },
        },
      ],
    },
    {
      id: 2,
      color: "green",
      active: "",
      style: {
        backgroundColor: "white",
        height: "auto",
        fontSize: "12px",
        fontWeight: "light",
      },
      col: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas.",
          style: {
            width: "20%",
            backgroundColor: "white",
            padding: "10px",
          },
          active: "",
        },
        {
          content:
            "Lolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas.",
          style: {
            width: "30%",
            backgroundColor: "white",
            padding: "10px",
          },
          active: "",
        },
        {
          content:
            "Consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas.Lolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas.",
          style: {
            width: "50%",
            backgroundColor: "white",
            padding: "10px",
          },
          active: "",
        },
      ],
    },
    {
      id: 3,
      color: "blue",
      active: "",
      style: {
        backgroundColor: "white",
        height: "auto",
        fontSize: "12px",
        fontWeight: "light",
      },
      col: [
        {
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet vulputate diam. Maecenas diam mauris, accumsan auctor malesuada sed, egestas ac mauris. Nullam vitae vestibulum orci. Quisque et sodales risus. Suspendisse mauris quam, commodo sed augue sed, pellentesque consequat ipsum. Praesent laoreet at sapien ut accumsan. Mauris facilisis, metus in dictum aliquam, sapien nibh volutpat eros, porttitor viverra risus libero in libero. Nullam at nibh orci.",
          style: {
            width: "50%",
            backgroundColor: "white",
            padding: "10px",
          },
        },
        {
          content:
            "Maecenas vulputate, nisl sed volutpat semper, diam dolor consequat velit, sed sodales augue augue rutrum nisi. Vivamus luctus lectus nec purus tristique, ut cursus velit imperdiet. Aliquam eget purus sed sem vestibulum placerat. Vestibulum commodo odio neque, in luctus ipsum volutpat condimentum. Nulla rhoncus nec justo ut convallis. Fusce vel nisi lacus. Duis eget arcu erat. Aliquam erat volutpat. Cras est risus, maximus eget placerat a, egestas at nisl. Proin laoreet efficitur sem, eget pulvinar ex hendrerit in. Vestibulum vitae malesuada ex. Donec laoreet non lorem ut lacinia. Vivamus placerat ex a scelerisque pulvinar. Vivamus et vulputate libero, at faucibus velit",
          style: {
            width: "50%",
            backgroundColor: "white",
            padding: "10px",
          },
        },
      ],
    },
  ]);

  const handleBlockOver = (e, colIndex) => {
    let id = parseInt(colIndex);
    let tempBlocks = blocks;
    tempBlocks.forEach((block) => {
      let bId = block.id;
      block.col.forEach((cc, index) => {
        let cId = bId.toString() + index.toString();
        if (parseInt(cId) === id) {
          cc.active = "block-active";
        } else {
          cc.active = "";
        }
      });
    });
    setBlocks([...tempBlocks]);
  };

  const handleBlockLeave = () => {
    let tempBlocks = blocks;
    tempBlocks.forEach((block) => {
      block.active = "";
    });
    setBlocks([...tempBlocks]);
  };

  const handleUp = (id) => {
    let tempBlocks = blocks;
    let index = tempBlocks.findIndex((e) => e.id == id);
    if (index > 0) {
      let el = tempBlocks[index];
      tempBlocks[index] = tempBlocks[index - 1];
      tempBlocks[index - 1] = el;
    }
    setBlocks([...tempBlocks]);
  };

  const handleDown = (id) => {
    let tempBlocks = blocks;
    let index = tempBlocks.findIndex((e) => e.id == id);
    if (index !== -1 && index < tempBlocks.length - 1) {
      let el = tempBlocks[index];
      tempBlocks[index] = tempBlocks[index + 1];
      tempBlocks[index + 1] = el;
    }
    setBlocks([...tempBlocks]);
  };

  const handleBlockClick = (e, id) => {
    setEditorId(id)
    console.log('e', e.target.outerText)
    setEditorValue(e.target.outerText)
    console.log('rrr', id)
    let tempBlocks = blocks;
    let tempEditor = editor;
    tempBlocks.forEach((block) => {
        console.log('eee')
      let bId = block.id;
      block.col.forEach((cc, index) => {
        let cId = bId.toString() + index.toString();
        console.log(cId)
        if (parseInt(cId) === id) {
            console.log('aaaaafff')
            setEditorId('aaa')
            setEditorValue('ddd')
        }
      });
    });
    console.log('dsdsd', editorId)
    setBlocks([...tempBlocks]);

  }

  return (
    <div className="all-container">
      <div className="width-600">
        {blocks.map((block) => {
          let blockIndex = block.id;
          return (
            <div className="tr-col" style={block.style} >
              {block.col.map((column, index) => {
                let colIndex = blockIndex.toString() + index.toString();
                return (
                  <div
                    id={colIndex}
                    style={column.style}
                    className={column.active}
                    onMouseOver={(e) => handleBlockOver(e, colIndex)}
                    value={column.content}
                    onClick={(e)=>handleBlockClick(e, colIndex)}
                  >
                    {column.content}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="editor-container">
        dane
        <h1>{editorId}</h1>
        <p>{editorValue}</p>
      </div>
    </div>
  );
}

export default SimpleBlocks2;
