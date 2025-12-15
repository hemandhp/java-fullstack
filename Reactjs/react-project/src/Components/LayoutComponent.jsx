import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <h1>My Website</h1>
            <nav>
                <Link to="/">Home</Link>  {" | "}
                <Link to="/contact">Contact</Link>{" | "}
                <Link to="/event">Event</Link>
                
            </nav>
           <hr />
           <Outlet />
        </div>
    )
}
