import { useState, useEffect } from "react";

function SimpleBlocks(props) {

    const classNames = require('classnames');
    const up = '>'

    const [blocks, setBlocks] = useState([
        {
            id: 0,
            color: 'yellow',
            active: '',
            tag: 'h1',
            value: 'Title',
            style: {
                height: '100px',
                fontSize: '40px'
            }
        },
        {
            id: 1,
            color: 'red',
            active: '',
            tag: 'p',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas, semper nunc ut, rutrum diam. Etiam ante leo, laoreet eu enim vel, tincidunt eleifend metus.',
            style: {
                height: '100px',
            }
        },
        {
            id: 2,
            color: 'green',
            active: '',
            style: {
                height: '100px',
            }
        },
        {
            id: 3,
            color: 'blue',
            active: '',
            style: {
                height: '100px',
            }
        },
    ])

    const handleBlockOver = (id) => {
        let tempBlocks = blocks;
        tempBlocks.forEach((block) => {
          if(block.id === id) {
            block.active = 'block-active'
          } else {
            block.active = ''
          }
          
        });
        setBlocks([...tempBlocks])
    }

    const handleBlockLeave = () => {
        let tempBlocks = blocks;
        tempBlocks.forEach((block) => {
            block.active = ''
        });
        setBlocks([...tempBlocks])
    }

    const handleUp = (id) => {
            let tempBlocks = blocks;
            let index = tempBlocks.findIndex(e => e.id == id);
            if (index > 0) {
              let el = tempBlocks[index];
              tempBlocks[index] = tempBlocks[index - 1];
              tempBlocks[index - 1] = el;
            }
            setBlocks([...tempBlocks])
    }

    const handleDown = (id) => {
        let tempBlocks = blocks;
        let index = tempBlocks.findIndex(e => e.id == id);
        if (index !== -1 && index < tempBlocks.length - 1) {
            let el = tempBlocks[index];
            tempBlocks[index] = tempBlocks[index + 1];
            tempBlocks[index + 1] = el;
          }
          setBlocks([...tempBlocks])
    }

    return (
      <div className="simple-blocks-container">
        {blocks.map((block) => {
            {if(block.active==='block-active'){
                return(
                    <div className="block-block-container">
                        <div
                            key={block.id}
                            className={`simple-block ${block.active}`}
                            style={block.style}
                            onMouseOver={(e)=>handleBlockOver(block.id)}
                            onMouseLeave={(e)=>handleBlockLeave(block.id)}
                        >
                            {block.value}
                        </div>
                        <div 
                            key={block.id}
                            className="over"
                            onMouseLeave={(e)=>handleBlockLeave(block.id)}
                        >
                            <div className="tools-container">
                                <div 
                                    className="up"
                                    onClick={(e)=>handleUp(block.id)}
                                >&#8593;</div>
                                <div 
                                    className="up"
                                    onClick={(e)=>handleDown(block.id)}
                                    >&#8595;</div>
                            </div>
                            
                        </div>
                    </div>
                    
                )
            }}
            return (
                <div
                    key={block.id}
                    className={`simple-block ${block.active}`}
                    style={block.style}
                    onMouseOver={(e)=>handleBlockOver(block.id)}
                    onMouseLeave={(e)=>handleBlockLeave(block.id)}
                >
                    {block.value}
                </div>
            )
        })}
      </div>
    );
  }
  
  export default SimpleBlocks;