import React, { useState } from 'react';

function Button({className,children,...props}){
    return (
    <button className={className} {...props}> {children}</button>
)}
const App = () =>{
    
    return (
       <Button className="hello" style={{width:100, height:100}}>
           <h1>Hello </h1>
       </Button>
    );
}
export default App;