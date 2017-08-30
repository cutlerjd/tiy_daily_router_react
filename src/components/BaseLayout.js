import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css'

class BaseLayout extends Component{
    render(){
        return (
            <div>
                <div className="nav">
                    <ul>
                    <NavLink exact activeClassName="active" to="/"><button>Home</button></NavLink>
                    <NavLink activeClassName="active" to="/About"><button>About</button></NavLink>
                    <NavLink activeClassName="active" to="/Portfolio"><button>Portfolio</button></NavLink>
                    <NavLink activeClassName="active" to="/references"><button>References</button></NavLink>
                    <NavLink activeClassName="active" to="/contact"><button>Contact</button></NavLink>
                    </ul>
                </div>
            {this.props.children}
            <footer>
            &copy; &hearts; Jase
            </footer>
            </div>
        )
    }
}

export default BaseLayout