import { Route, Routes, Link } from "react-router";
import Home from "./Components/Home";
import QueryPage from "./Components/QueryPage";
import HashPage from "./Components/HashPage";
import StateSent from "./Components/StateSent";
import StateReceive from "./Components/StateReceive";
import CurrentPath from "./Components/CurrentPath";
import './App.css'



function App() {
  return (
    <div>
      <CurrentPath />
      <nav>
        <Link to="/">Home</Link> {" | "}
        <Link to="/Query?category=laptop&price=45000">Query Page</Link> {" | "}
        <Link to="/hash#setion2">Hash Page</Link> {" | "}
        <Link to="/send-state">Sent State</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/query" element={<QueryPage/>} />
        <Route path="/hash" element={<HashPage/>} />
        <Route path="/send-state" element={<StateSent/>} />
        <Route path="/receive-state" element={<StateReceive/>} />
      </Routes>
    </div>


  )

}
export default App