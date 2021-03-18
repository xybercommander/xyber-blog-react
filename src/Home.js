import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);  
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data for the resource');
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, []);

    // Main component
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title={'All Blogs!'} />}
            {/* If the blogs value is null then BlogList component wont even render */}
        </div>
    );
}
 
export default Home;   