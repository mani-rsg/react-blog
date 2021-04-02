import { useState, useEffect } from 'react';
import BlogsList from './BlogList'; 
//* imported as plural just to understand that the import name can be different from export name
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id)=>{
        setBlogs(blogs.filter(blog=>blog.id!==id));
    }

    //? useEffect: It will invoke the function provided as parameter whenever the component is rendered, even on initial render.
    useEffect(()=>{
        console.log("useEffect triggered");
        console.log(blogs);
        //! To be carefull when changing the state in useEffect, as it may end up in continuous loop... 
        //? Explanation: (change useState in useEffect => component re-render => useEffect Triggered => change useState in useEffect and so on....)
    })

    return (
        <div className="home">
            <BlogsList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;