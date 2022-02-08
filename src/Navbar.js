import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: '#3567f1',
                    borderRadius: '8px'
                }}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#3567f1',
                    borderRadius: '8px'
                }}>Create New</Link>
            </div>
        </nav>
    );
}
 
export default Navbar