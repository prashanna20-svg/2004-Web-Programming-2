export default function PostForm({ newPost, onInputChange, onSubmit }) {
  return (
    <div>
      <h2>Post Form</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={newPost.title}
            onChange={onInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="body">Body: </label>
          <input
            name="body"
            id="body"
            value={newPost.body}
            onChange={onInputChange}
            rows="1"
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
      
      <hr />
    </div>
  );
}