// import './App.css'
// import { Routes, Route, Link } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Contact from './Components/Contact'
// import Event from './Components/Event'



// function App() {

//   return (

//     <div>


//       <nav>
//         <Link to="/">Home</Link>{" | "}
//         <Link to="/about">About</Link>{" | "}
//         <Link to="/event">Event</Link>{" | "}
//         <Link to="/contact">Contact</Link>
//       </nav>


//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/event" element={<Event />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>


//     </div>

//   )

// }
// export default App


import User from "./Components/user"
import Home from "./Components/Home"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  )

}

export default App