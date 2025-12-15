


function Users(){
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.users);

    return(
        <div>
            <button onClick={()=>dispatch(fetchusers())}>Load Users</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {users && users.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                </div>
            ))}
        </div>
    )
}