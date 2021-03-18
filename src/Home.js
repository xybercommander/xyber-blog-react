import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);  
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    // Main component
    return ( 
        <div className="home">            
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title={'All Blogs!'} />}
            {/* If the blogs value is null then BlogList component wont even render */}
        </div>
    );
}
 
export default Home;   