import { useState, useEffect } from "react";

function Playground() {

    const [blocks, setBlocks] = useState([
        {
            id: 0,
            name: 'Title',
            tag: 'h1',
            value: 'Title',
            fontSize: 24,
            color: 'black',
            style: {
                color: 'red',
                fontSize: 24,
                padding: 10,
                margin: 0
            },
            hover: ''
        },
        {
            id: 1,
            name: 'Paraghraph',
            tag: 'p',
            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eros id neque ultricies consectetur nec eget lorem. Cras eu nisi egestas, semper nunc ut, rutrum diam. Etiam ante leo, laoreet eu enim vel, tincidunt eleifend metus. Quisque a elit efficitur, scelerisque mi viverra, consectetur massa. Maecenas efficitur sapien quis turpis rutrum, vitae dignissim tortor mollis. Etiam tincidunt, metus ut fringilla luctus, libero odio sollicitudin nisl, ut euismod augue ipsum sed nisi. Pellentesque nisl metus, vestibulum ac diam quis, porttitor vehicula tellus. Proin odio felis, molestie quis erat non, elementum placerat est. Nulla maximus ut augue non tempus.',
            fontSize: 12,
            color: 'black',
            style: {
                color: 'black',
                fontSize: 12,
                padding: 10,
                margin: 0
            },
            hover: ''
        }
    ])

    const handleMouseOverBlock = (e, id) => {
        console.log(e, id)

        let tempBlocks = blocks;
        tempBlocks.forEach((block) => {
          if(block.id === id) {
            block.hover = 'block-hover'
          } else {
            block.hover = ''
          }
          
        });
        setBlocks([...tempBlocks])
        console.log(tempBlocks)
    }

    const handleMouseLeaveBlock = (e, id) => {
        let tempBlocks = blocks;
        tempBlocks.forEach((block) => {
          
           
                block.hover = ''
         

        });
        setBlocks([...tempBlocks])
    }


    return (
      <div 
        className="playground-container"
        
      >
        {blocks.map((block) => {
            if(block.tag === 'p') {
                return(
                    <div 
                        className="block-container"
                        key={block.id}
                        onMouseOver={(e)=>handleMouseOverBlock(e, block.id)}
                        onMouseLeave={(e)=>handleMouseLeaveBlock(e)}
                    >
                        <table>
                            <tr>
                                <td>
                                    <p style={block.style}>{block.value}</p>
                                </td>
                            </tr>
                            
                        </table>
                        <div class={block.hover}>aaa</div> 
                    </div>
                )
            } else if (block.tag === 'h1') {
                return(
                    <div 
                        className={block.hover}
                        key={block.id}
                        onMouseOver={(e)=>handleMouseOverBlock(e, block.id)}
                        onMouseLeave={(e)=>handleMouseLeaveBlock(e)}
                    >
                        <h1 style={block.style}>{block.value}</h1>
                    </div>
                )
            }
        })}
      </div>
    );
  }
  
  export default Playground;