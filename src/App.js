import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.css'
import './styles/transitions.css'

import Hamburger from './components/Hamburger'
import Starfield from './components/Starfield'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Demos from './pages/Demos'

const App = () => {

  const options = [
    {text: 'Hello', url: '/'},
    {text: 'Demos', url: '/demos'},
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
      <Route exact path='/demos' render={props => (
        <Demos/>
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
