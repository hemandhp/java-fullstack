import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getData() {
            const response=await fetch(url);
            const result=await response.json();
            setData(result);
            setLoading(false);

        }
        getData();

    },{url} );
    return { data, loading };



}
