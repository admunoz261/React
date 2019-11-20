import React from 'react';
import Navbar from './Navbar'

function Layout(props){
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    );
}

export default Layout;