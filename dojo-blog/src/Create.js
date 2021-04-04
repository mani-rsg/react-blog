import { useState } from "react";
import {useHistory} from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mani');
    
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault(); //* default behaviour on a form submit is to reload the page
        const blog = { title, body, author };
        console.log(blog);
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('Blog added');
            setIsPending(false);
            //* history(-1) will go one page backward (just like back button on chrome), similarly history(1) for forward
            history.push('/'); //? Note: dont mention the whole path just mention the path as we done in App component
        }).catch(error=>{
            console.error(error, "unable to add blog");
            setIsPending(false);
        })
    }
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    type="text"
                    required
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="Mani">Mani</option>
                    <option value="Bala">Bala</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
    );
}

export default Create;