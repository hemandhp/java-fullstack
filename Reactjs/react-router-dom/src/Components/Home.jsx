// import { useNavigate } from "react-router-dom"


// function Home() {
//     const navigate = useNavigate();

//     const goToAbout = () => {
//         navigate("/About")
//     }

//     return (
//         <div>
//             <h1>Home Page</h1>
//             <button onClick={goToAbout}>Go To About</button>

//         </div>
//     )
// }
// export default Home


// export default function Home() {
//     return (
//         <div>
//             <h1>Home Page</h1>
//         </div>
//     )
// }

import { Link } from "react-router-dom"
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/user/1">USER-1</Link>
            <br />
            <Link to="/user/2">USER-2</Link>
            <br />
            <Link to="/user/Arya">USER-ARYA</Link>
        </div>
    )

}
export default Home