
import hljs from "highlight.js";
import React, {useEffect } from 'react';

export default function Code(props) {
    useEffect(() => {
        hljs.highlightAll();
      }, []);

      return (
        <pre>
            <code className={props.className}>{props.children}
</code>

<style jsx> 
{
    `.display-linebreak {
        white-space: pre;
      }`
}
</style> 
        </pre>
      )
}