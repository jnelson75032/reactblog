const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/" style={{
                    color: "white",
                    backgroundColor: '#3567f1',
                    borderRadius: '8px'
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#3567f1',
                    borderRadius: '8px'
                }}>Create New</a>
            </div>
        </nav>
    );
}
 
export default Navbar