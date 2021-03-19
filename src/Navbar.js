import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Xyber Blog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
                {/* <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a> */}
            </div>
        </nav>
    );
}
    
export default Navbar;
