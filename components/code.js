
import hljs from "highlight.js";
import React, {useEffect } from 'react';

export default function Code(props) {
    useEffect(() => {
        hljs.highlightAll();
      }, []);

      return (
        <pre>
            <code className={props.className}>{props.children}</code>

<style jsx> 
{
    `

    @media (min-width: 720px) {
          code {
      padding:5% 5% 0 0;
      background-color:rgb(0, 0, 0, 0.03);
      display: block;
      white-space: pre;   
    }
  
      
    }

    @media (max-width: 720px) {
      code {
  padding:5% 5% 0 0;
  background-color:rgb(0, 0, 0, 0.03);
  font-size: 14px;
  display: block;
  white-space: pre-wrap   
}
.display-linebreak {
    white-space: pre;
  }
  

}
    
    `

      
}
</style> 
        </pre>
      )
}