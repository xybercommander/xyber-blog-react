import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {    

    // Calling the custom hook 'useFetch' that we made
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // Main component
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title={'All Blogs!'} /> }
            {/* If the blogs value is null then BlogList component wont even render */}
        </div>
    );
}
 
export default Home;   