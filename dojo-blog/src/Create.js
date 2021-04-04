import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mani');
    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    onChange={(event)=>setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    type="text"
                    required
                    onChange={(event)=>setBody(event.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(event)=>setAuthor(event.target.value)}
                >
                    <option value="Mani">Mani</option>
                    <option value="Bala">Bala</option>
                </select>
                <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
    );
}

export default Create;