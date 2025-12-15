import React, { useEffect, useState } from "react";


function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.users);
                setLoading(false);
            })
    }, []);
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Users</h2>
            {users.map(users => (
                <p key={users.id}><b>{users.firstName} {users.lastName}</b> -Age:-{users.age}</p>
            ))}
        </div>
    )

}

export default UserList;