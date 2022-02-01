import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.css'
import './styles/transitions.css'

import Hamburger from './components/Hamburger'
import Starfield from './components/Starfield'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {

  const options = [
    {text: 'Home', url: '/'},
    {text: 'About Me', url: '/about'},
    {text: 'Projects', url: '/projects'}
  ]



  return (
    <div>
    <Router>

    {/* universal elements */}
    <Starfield />
    <Hamburger options={options}/>

    {/* content window */}
    <Switch>
      <Route exact path='/' render={props => (
        <Home/>
      )} />
      <Route exact path='/about' render={props => (
        <About/>
      )} />
      <Route exact path='/projects' render={props => (
        <Projects/>
      )} />
    </Switch>

    </Router>
    </div>
  )
}

export default App
