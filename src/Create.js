const Create = () => {
    return (
        <div className="create">
            <h2>Add a New Post</h2>
            <form>
                <label>Post title:</label>
                <input
                  type="text"
                  required
                />
                <label>Post body:</label>
                <textarea
                  required
                ></textarea>
                <label>Post author:</label> 
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Post</button>
            </form>
        </div>
    );
}
 
export default Create;
