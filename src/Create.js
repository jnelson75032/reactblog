import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] =  useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsPending(true);
        
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post body:</label>
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Post author:</label> 
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Post</button> }
                { isPending && <button disabled>Adding Post...</button> }
            </form>
        </div>
    );
}
 
export default Create;
