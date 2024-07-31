import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const isLoggedIn = !!localStorage.getItem('user');
    const navigate = useNavigate();
  
    const handleLogout = (e:any) => {
        e.preventDefault();
      localStorage.removeItem('user'); 
      navigate('/');
    };
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="site-title">Home</Link>
                <ul>
                    <Link to="/product">Products</Link>
                    {isLoggedIn && <Link to="/favorites">Favorites</Link>}
                    {!isLoggedIn ? (
                    <Link to="/login">Login</Link>
                ) : (
                 <Link to="/logout" onClick={handleLogout}>Logout</Link>
                 )}
                </ul>
            </nav>
        </div>
    );
}

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const path =window.location.pathname

    return (
        <li className={path ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}
