import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My React Project', body: 'Lorem Ipsum Dolor...', author: 'Xyber', id: 1 },
        { title: 'They see me bloggin', body: 'Lorem Ipsum Dolor...', author: 'Samrat', id: 2 },
        { title: 'Web dev tips', body: 'Lorem Ipsum Dolor...', author: 'Xyber', id: 3 },
    ])
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState('Samrat');

    useEffect(() => {
        console.log(blogs);
    }, [name]) //This stuff in the array is the dependencies the useEffect is going to consider

    return (
        <div className="home">            
            <BlogList 
                blogs={blogs} 
                title={'All Blogs!'}
                handleDelete={handleDelete}
            /> {/* All the blogs */}           
            <button onClick={() => setName(name === 'Xyber' ? 'Samrat':'Xyber')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;   