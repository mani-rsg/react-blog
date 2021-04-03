import { useState, useEffect } from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //? useEffect: It will invoke the function provided as parameter whenever the component is rendered, even on initial render.
    useEffect(() => {
        console.log("useEffect triggered");
        setTimeout(() => {
            fetch(url).then(response => {
                console.log(response);
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            }).then(data => {
                console.log(data);
                setError(null);
                setIsPending(false);
                setData(data);
            }).catch(error=>{
                console.error(error.message);
                setIsPending(false);
                setData(null);
                setError(error.message);
            })
        }, 1000)
    }, [url]);
    
    return {data, isPending, error};
}
 
export default useFetch;