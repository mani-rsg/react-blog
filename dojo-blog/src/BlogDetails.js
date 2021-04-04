import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const [isDeleting, setIsDeleting] = useState(false);
    const history = useHistory();

    const handleDelete = ()=>{
        setIsDeleting(true);
        fetch(`http://localhost:8000/blogs/${id}`, {method: 'DELETE'}).then(()=>{
            console.log('Blog Deleted');
            history.push('/');
        }).catch(error=>{
            console.error(error);
            setIsDeleting(false);
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {!isDeleting && <button onClick={handleDelete}>Delete Blog</button>}
                    {isDeleting && <button disabled>Deleting blog...</button>}
                </article>
            )}
        </div>
    );
}

export default BlogDetails;