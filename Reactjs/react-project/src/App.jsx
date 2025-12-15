// import { Route, Routes, Link } from "react-router-dom";
// import Home from "./Components/Home";
// import QueryPage from "./Components/QueryPage";
// import HashPage from "./Components/HashPage";
// import Contact from "./Components/Contact";
// import Event from "./Components/Event";
// import CurrentPath from "./Components/CurrentPath";
// import NotFound from "./Components/NotFound";
// import './App.css'
// import LayoutComponent from "./Components/LayoutComponent";



// function App() {
//     return (
        // <div>
        //     <CurrentPath />
        //     <nav>
        //         <Link to="/">Home</Link> {" | "}
        //         <Link to="/Query?batch=Java Fullstack&register=4507">Query Page</Link> {" | "}
        //         <Link to="/hash#setion2">Hash Page</Link> {" | "}
        //         <Link to="/contact">Contact</Link>
        //     </nav>

        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/query" element={<QueryPage />} />
        //         <Route path="/hash" element={<HashPage />} />
        //         <Route path="/contact" element={<Contact />} />
        //         <Route path="/event" element={<Event />} />
        //         <Route path="*" element={<NotFound/>} />

        //     </Routes>
        // </div>
//         <div>
//             <LayoutComponent />
//        <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/event" element={<Event />} />
        
//        </Routes>
//        </div>


//     )

// }
// export default App



import './App.css'
import CallBack from './Components/CallBack';
function App() {
    return(
        <div>
           
            
            <CallBack />
            
        </div>
    
    )
}
export default App