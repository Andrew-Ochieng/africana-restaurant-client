import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([])
    // const [loading, setLoading] = useState([])
    // const [error, setError] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setData(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url])

    return ( 
        {data}
     );
}
 
export default UseFetch;