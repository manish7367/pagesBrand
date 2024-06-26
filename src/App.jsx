import React from 'react'
import img1 from './assets/nikelogo.png'
import Hero from './components/Hero'
const App = () => {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src={img1}/>
        </div>

        <ul>
         <li href="#">Menu</li>
         <li href="#">location</li>
         <li href="#">Product</li>
         <li href="#">About</li>
         <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    <Hero/>

    </div>
  )
}

export default App
