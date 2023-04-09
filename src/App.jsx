import React from 'react'
import { Main, About, Services, Portfolio, Contact, Footer, Map } from './components'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
  }

const App = () => {


  return (
    <div>
      
      <Main />
      <About />
      <Services /> 
      <Portfolio />
      {/* <Map location={location} zoomLevel={17} /> */}
      <Contact />
      <Footer/>
 
    </div>
  )
}

export default App