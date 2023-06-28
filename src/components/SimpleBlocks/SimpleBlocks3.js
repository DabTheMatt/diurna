import { useState, useEffect } from "react";

function SimpleBlocks2(props) {

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
                height: 'auto',
                fontSize: '40px'
            },
            col: [
                {
                    width: '100%'
                }
            ]
        },
        {
            id: 1,
            color: 'red',
            active: '',
            tag: 'p',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas, semper nunc ut, rutrum diam. Etiam ante leo, laoreet eu enim vel, tincidunt eleifend metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas, semper nunc ut, rutrum diam. Etiam ante leo, laoreet eu enim vel, tincidunt eleifend metus.',
            style: {
                height: 'auto',
            },
            col: [
                {
                    width: '100%'
                }
            ]
        },
        {
            id: 2,
            color: 'green',
            active: '',
            style: {
                height: 'auto',
            },
            col: [
                {
                    width: '20%'
                },
                {
                    width: '30%'
                },
                {
                    width: '50%'
                },
                
            ],
        },
        {
            id: 3,
            color: 'blue',
            active: '',
            style: {
                height: 'auto',
            },
            col: [
                {
                    width: '20%'
                },
                {
                    width: '80%'
                }
            ],
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
      <div className="width-600">
        {blocks.map((block)=>{
            return(
                <div>
                    {block.col.map((el)=>{
                return(
                    <div>
                        fff
                    </div>
                )
            })}
                </div>
            )
            
            
            
        })}
      </div>
    );
  }
  
  export default SimpleBlocks2;