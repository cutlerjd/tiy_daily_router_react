import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import References from './components/References'
import Contact from './components/Contact'

ReactDOM.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/about" component={About}/>
                <Route path="/references" component={References}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
            </Switch>
        </BaseLayout>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
