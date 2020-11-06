import React from 'react'

function Navbar() {
    return (
        <nav className="side-nav">    
            <img src="https://www.w3schools.com/w3images/p3.jpg" alt="Where is my face"/>
            
            <div className="text">
                <h3>portfolio</h3>
                <p>-Template by Adithya</p>
            </div>
            <div className="links">
                <li><a href="#" className="block"><h3>portfolio</h3></a></li>
                <li><a href="#" className="human"><h3>about</h3></a></li>
                <li><a href="#" className="mail"><h3>contact</h3></a></li>
            </div>
            <div className="social">
                <li>f</li>
                <li>i</li>
                <li>L</li>
                <li>P</li>
                <li>S</li>
            </div>
        </nav>
    
    )
}

export default Navbar;
