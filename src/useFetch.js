import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const abortCont = new AbortController(); //abort the data fetch if changes in the dom are done to a different component

        fetch(url, { signal:abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            }) 
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                // console.log(err.message);
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
                
            })

            return () => abortCont.abort();
    }, [url]); // Empty array ([]) ensures useEffect is only ran at render even if dom is updated afterwards, with parameters (e.g. [name, age]) it will run  when name changes
    return { data, isPending, error };
}
 
export default useFetch;

