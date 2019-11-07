import React, {Component} from 'react';
import GenderGapFacts from './components/GenderGapFacts';
import AgeGapFacts from './components/AgeGapFacts';
import RacialGapFacts from './components/RacialGapFacts';
import './App.css';
import { Route , Switch , NavLink, Redirect , withRouter} from 'react-router-dom'


class App extends Component {
  render() {
  return (
    <main className="App">
      <header>
        <NavLink to='/agefacts' activeClassName='lol' activeStyle={{background:'red', color: 'white'}}> Age Facts </NavLink>
        <NavLink to='/genderfacts' activeClassName='lol' activeStyle={{background:'red', color: 'white'}}> Gender Gap Facts </NavLink>
        <NavLink to='/racialfacts' activeClassName='lol' activeStyle={{background:'red', color: 'white'}}> Racial Gap Facts </NavLink>
        <h1 id="intro-heading">Now that we are part of the tech industry, we need to be aware of the problems it has, and start thinking of how to solve them</h1>
      </header>
      <section>
        <p>Now that we know the problem. Let's be part of the solution </p>
        <img id='inequality-logo' src='https://www.equalitytrust.org.uk/sites/default/files/FI_logo.jpg' alt='inequality-logo'/>
      </section>
      <Switch>
        <Route path={'/genderfacts'} component={GenderGapFacts}/>
        <Route path={'/agefacts'} component={AgeGapFacts}/>
        <Route path={'/racialfacts'} component={RacialGapFacts}/>
        <Redirect to="/agefacts" />
      </Switch>
    </main>
  )}
}

export default withRouter(App);
