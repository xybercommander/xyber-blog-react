import { useState } from "react";

const Create = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('Xyber');
   const [isPending, setIsPending] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault(); // Prevents the page to refresh 
      const blog = { title, body, author }; // The blog object
            
      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
         method: 'POST',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(blog)
      }).then(() => {
         console.log('Blog Added');
         setIsPending(false);
      })
   }

   return ( 
      <div className="create">
         <h2>Add a New Blog</h2>
         <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
               type="text" 
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea 
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
            >
               <option value="Xyber">Xyber</option>
               <option value="Samrat">Samrat</option>
            </select>
            { !isPending && <button>Add Blog</button> }
            { isPending && <button disabled>Adding Blog...</button> }
         </form>         
      </div>
   );
}
 
export default Create;