import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='selection:bg-purple-300 selection:text-black bg-gradient-to-t from-ambient-purple via-black to to-ambient-purple'>      
      <div className="text-neutral-300 p-10 lg:px-64">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App