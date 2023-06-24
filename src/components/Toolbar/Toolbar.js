import { useState, useEffect } from "react";

import Paragraph from "./Tools/Paragpraph/Paragraph";
import Title from "./Tools/Title/Title";

function Toolbar() {

    const [tools, setTools] = useState([
        {
            id: 0,
            toolName: 'Paragraph',
            tag: '<p>',
            active: false,
            defaultHeight: 100,
            backgroundColor: 'yellow'
        },
        {
            id: 1,
            toolName: 'Title',
            tag: '<h1>',
            active: false,
            defaultHeight: 50,
            backgroundColor: 'red'
        },
        {
            id: 2,
            toolName: 'Image',
            tag: '<img>',
            active: false,
            defaultHeight: 50,
            backgroundColor: 'red'
        },
        {
            id: 3,
            toolName: 'Two column',
            tag: '2col',
            active: false,
            defaultHeight: 50,
            backgroundColor: 'red'
        },
        {
            id: 4,
            toolName: 'Three column',
            tag: '3col',
            active: false,
            defaultHeight: 50,
            backgroundColor: 'red'
        },
        {
            id: 5,
            toolName: 'Four column',
            tag: '4col',
            active: false,
            defaultHeight: 50,
            backgroundColor: 'red'
        },
    ]);
    const [clicked, setClicked] = useState('tool-container');

    // const handleToolClick = (e) => {
    //     console.log('clicked', e)
    //     setClicked('tool-container-active')
    // }

    const handleToolClick = (e, id) => {
        console.log('e', e)
        let tempTools = tools;
        tempTools.forEach((tool) => {
          if(tool.id === id) {
            if(tool.active !== true) {
                tool.active = !tool.active
            }
          } else {
            tool.active = false
          }
          
        });
        setTools([...tempTools])
        console.log(tempTools)
      }

    return (
        <div>
            <div className="toolbar-container">
                {tools.map((tool) => {
                    {if(tool.active) {
                        return(
                            <div 
                                className="tool-container-active"
                                onClick={e=>handleToolClick(e, tool.id)}
                                key={tool.id}
                            >
                                <h1 className="tool-tag">{tool.tag}</h1>
                            </div>
                        )
                    } else {
                        return(
                            <div 
                                className="tool-container"
                                onClick={e=>handleToolClick(e, tool.id)}
                                key={tool.id}
                            >
                                <h1 className="tool-tag">{tool.tag}</h1>
                            </div>
                        )
                    }}
                    
                })}
            </div>
        </div>
    );
  }
  
  export default Toolbar;