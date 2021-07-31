import './App.css';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


//class data
class Header extends Component {
        
        render() {
       
        return (
            <div className="Topnav">                                        
                    <header><a href="https://parmarnikhil.github.io/FoodZilla-Web">Home</a><center><p>FoodZilla</p></center></header>
            </div>
        );
    }
}

export default withRouter(Header);
