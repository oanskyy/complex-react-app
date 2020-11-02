import React from "react"
import ReactDOM from "react-dom"

import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import Footer from './components/Footer'

function Main() {
   return (
   <div>
      <Header />
      <HomeGuest />
      <Footer />
      
   </div>
   )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if (module.hot) {
   module.hot.accept()
}
