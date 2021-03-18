import { useState } from 'react';
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

    return (        
        <div className="home">            
            <BlogList 
                blogs={blogs} 
                title={'All Blogs!'}
                handleDelete={handleDelete}
            /> {/* All the blogs */}            
            <BlogList 
                blogs={blogs.filter((blog) => blog.author === 'Xyber')} 
                title={'Xyber\'s Blogs!'}
            /> {/* Using filter mehtod to only output the blogs with author as 'Xyber' */}
        </div>
    );
}
 
export default Home;   