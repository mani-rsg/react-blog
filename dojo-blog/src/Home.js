import { useState } from 'react';
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
    return (
        <div className="home">
            <BlogsList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;