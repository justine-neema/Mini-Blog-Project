import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="header_logo">Dev Insights</h1>
            <nav className="header_nav">
                <a href="#new-post" className="header_link">
                    New Post
                </a>
            </nav>
        </header>
    );
}

export default Header;