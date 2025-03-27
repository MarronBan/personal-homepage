import './App.scss'

import Intro from "./components/Intro/Intro"
import About from "./components/About/About"
import Project from "./components/Project/Project"
function App() {

  return (
    <>
      <div className='app-wrapper'>
        <Intro></Intro>
        <About></About>
        <Project></Project>
      </div>
    </>
  )
}

export default App
