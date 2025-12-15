import { useContext } from "react";
import UserContext  from "./UserContext";


function Profile() {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Course: {user.course}</p>
        </div>
    );
}
export default Profile;