import { useState, useEffect } from 'react';
import BlogsList from './BlogList';
//* imported as plural just to understand that the import name can be different from export name
const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //? useEffect: It will invoke the function provided as parameter whenever the component is rendered, even on initial render.
    useEffect(() => {
        console.log("useEffect triggered");
        setTimeout(() => {
            fetch('http://localhost:8000/blogs').then(response => {
                console.log(response);
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            }).then(data => {
                console.log(data);
                setError(null);
                setIsPending(false);
                setBlogs(data);
            }).catch(error=>{
                console.error(error.message);
                setError(error.message);
                setIsPending(false);
            })
        }, 1000)
    }, []); //? you can pass empty dependency array to invoke the useEffect function only on initialization

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogsList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;