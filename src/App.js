import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.css'
import './styles/transitions.css'

import Hamburger from './components/Hamburger'
import Starfield from './components/Starfield'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Demos from './pages/Demos'

const App = () => {

  const options = [
    {text: 'Hello', url: '/'},
    {text: 'My Skills', url: '/about'},
    {text: 'Projects', url: '/projects'},
    {text: 'Demos', url: '/demos'},
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
      <Route exact path='/demos' render={props => (
        <Demos/>
      )} />
    </Switch>

    </Router>
    </div>
  )
}

export default App
