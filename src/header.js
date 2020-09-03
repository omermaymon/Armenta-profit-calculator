import React from 'react';
import '../src/style.css';


const Header = (props)=>{ //@@TODO make fancy
    return(<div className="header">
                {logo()}
                <h2 className="header">
                    calculate your savings!
                </h2>
           </div>) 
    
}

const logo = () =>{
    return (
    <img className="logo" alt="armenta-logo" src="imgs/title.jpeg" />)
}


export default Header;