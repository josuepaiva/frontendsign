import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <header id="main-header">
        <h1><a id="linktitle" href="/">Teste API</a></h1>
        {/* <h1>  */}
            {/* <Link to={`/`}>Teste API</Link> */}
        {/* </h1> */}
    </header>
);

export default Header;