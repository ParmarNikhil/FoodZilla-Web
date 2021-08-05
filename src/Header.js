import './App.css';
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


//class data
class Header extends Component {
        
        render() {
       
        return (
            <div className="Topnav">                                        
                    <header><a href="https://parmarnikhil.github.io/FoodZilla-Web">Home</a><Link to="/Favourites">Favourites</Link><p>FoodZilla</p></header>
            </div>
        );
    }
}

export default withRouter(Header);
