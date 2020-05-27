import React from 'react';
import './global.scss';
import Nav from './componets/Nav/Nav';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

const App = ({nav: {links}}) => {
  return <>
    <header className={'header'}>
      <Nav links={links} top={true}/>
    </header>
    <main>
      <Route exact path='/' render={() => <Home />}/>
      <Route path='/aboutme' render={() => <AboutMe />}/>
      <Route path='/portfolio' render={() => <AboutMe />}/>
      <Route path='/contact' render={() => <Home />}/>
    </main>
  </>
};

let mapStateToProps = state => ({
  nav: state.navLinks
});

export default connect(mapStateToProps, null)(App);
