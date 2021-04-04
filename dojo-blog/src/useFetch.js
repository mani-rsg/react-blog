import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //? useEffect: It will invoke the function provided as parameter whenever the component is rendered, even on initial render.
    useEffect(() => {
        console.log("useEffect triggered");
        const abortController = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortController.signal}).then(response => {
                console.log(response);
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            }).then(data => {
                setError(null);
                setIsPending(false);
                setData(data);
            }).catch(error=>{
                if(error.name==="AbortError") return;
                console.error(error.message);
                setIsPending(false);
                setData(null);
                setError(error.message);
            })
        }, 1000);
        return ()=> abortController.abort();
    }, [url]);
    
    return {data, isPending, error};
}
 
export default useFetch;