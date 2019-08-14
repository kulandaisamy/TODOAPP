import React from 'react'
import './style.css'
import logo from "./list.svg";
import Form from "./body"

function Header()
{
    return(
    <React.Fragment>
    <div></div>
    <h1 className="blinking">TODO</h1>
    <img src= {logo} className="logo"></img>
    </React.Fragment>
    ) 
}

function Footer()
{
    return <span className="footer">Designed by Kulandaisamy © {new Date().getFullYear()}</span>
}

function App()
{
return(
<React.Fragment>
<Header/>
<Footer/>
<Form/>
</React.Fragment>
     )
}

export default App