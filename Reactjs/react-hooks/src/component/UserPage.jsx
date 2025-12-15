function UserPage(){
    const[user,setUser]=useState([]);
    const[loading,setLoading]=useState([]);
    const[error,setError]=useState("");
}

    useEffect(()=>{
async function fetchData(){
    try{
        setLoading(true);
        const response=await fetch("https://dummyjson.com/test");
        const data=await response.json()
        setUser(data);
        setLoading(false);
    }
}})