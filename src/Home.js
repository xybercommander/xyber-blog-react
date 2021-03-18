import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My React Project', body: 'Lorem Ipsum Dolor...', author: 'Xyber', id: 1 },
        { title: 'They see me bloggin', body: 'Lorem Ipsum Dolor...', author: 'Samrat', id: 2 },
        { title: 'Web dev tips', body: 'Lorem Ipsum Dolor...', author: 'Xyber', id: 3 },
    ])
    return (        
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                </div>
            )) }
        </div>
    );
}
 
export default Home;   