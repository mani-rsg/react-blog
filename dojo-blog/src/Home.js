import { useState, useEffect } from 'react';
import BlogsList from './BlogList';
//* imported as plural just to understand that the import name can be different from export name
const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    //? useEffect: It will invoke the function provided as parameter whenever the component is rendered, even on initial render.
    useEffect(() => {
        console.log("useEffect triggered");
        fetch('http://localhost:8000/blogs').then(response => {
            console.log(response);
            return response.json();
        }).then(data=>{
            console.log(data);
            setBlogs(data);
        })
    }, []); //? you can pass empty dependency array to invoke the useEffect function only on initialization

    return (
        <div className="home">
            {blogs && <BlogsList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;