import React from 'react';

export class NavBar extends React.Component {
    render (){
       return ( 
       <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo center"></a>
            <ul className="left hide-on-med-and-down">
            <li><a className="waves-effect waves-light btn pulse">Connect</a></li>
            <li><a className="waves-effect waves-light ">About Me</a></li>
            </ul>
            </div>
    </nav>)
    }
}

