
import useFetch from "./useFetch";
export default function users() {
    const{data,loading}=useFetch("https://jsonplaceholder.typicode.com/users");
    if(loading)return <h1>Loading...</h1>
    
    return (
        <div>
            <h1>Users List</h1>
            
                {data.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))}
            
        </div>
    )
}