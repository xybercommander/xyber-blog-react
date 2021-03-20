import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);  
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);    

    useEffect(() => {
        const abortCont = new AbortController(); // Using an AbortController to stop the fetch
                                                 // when routed to another page before the fetch completes

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }) // Hooking up the AbortController
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data for the resource');
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if(err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }                
                });
        }, 1000);

        return () => abortCont.abort(); // Aborting before the fetch completes

    }, [url]); // Added url as the dependency

    return { data, isPending, error };
}

export default useFetch; 